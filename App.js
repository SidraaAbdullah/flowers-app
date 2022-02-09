import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import { useFonts } from "expo-font";
import { QueryClientProvider, QueryClient, useMutation } from "react-query";
import useStorage from "./src/hooks/useStorage";
import axios from "axios";
import {
  defaultQueryFn,
  defaultMutationFn,
  reactQueryConfig,
} from "./src/constants";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import { BASE_URL } from "./src/constants";
import * as Location from "expo-location";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { ADD_ADDRESS } from "./src/queries";

const App = () => {
  const [user, isLoading] = useStorage("logIn", { isObject: true });
  const [locationLoad, setLocationLoad] = useState(true);
  const [verify, setVerify] = useState({
    verify: false,
    isVerifyLoading: false,
  });

  if (user) {
  }
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
        ...reactQueryConfig,
      },
      mutations: {
        mutationFn: defaultMutationFn,
      },
    },
  });

  useEffect(async () => {
    setVerify({ verify: false, isVerifyLoading: true });
    if (user) {
      axios.defaults.headers.common.Authorization = `bearer ${user?.access_token}`;
      axios
        .post(BASE_URL + "/verify-user")
        .then(() => {
          setVerify({ verify: true, isVerifyLoading: false });
        })
        .catch(() => {
          setVerify({ verify: false, isVerifyLoading: false });
        });
    }
  }, [isLoading]);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setLocationLoad(false);
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        if (location) {
          const { latitude, longitude, accuracy, altitude } =
            location.coords || {};
          const locationDetails = {
            latitude,
            longitude,
            accuracy,
            altitude,
          };
          const address = ((await Location.reverseGeocodeAsync(
            locationDetails
          )) || [])[0];
          if (address) {
            const formattedAddress = `${address.name} ${address.district}`;
            const addressObject = {
              address: formattedAddress,
              addressPaths: address,
              locationDetails,
            };
            await ADD_ADDRESS(addressObject);
            await AsyncStorageLib.setItem(
              "ca_location",
              JSON.stringify(addressObject)
            );
          }
        }
        setLocationLoad(false);
      } catch (error) {
        console.log(error);
      }
      return () => {};
    })();
  }, []);

  const [loaded] = useFonts({
    ProximaNova: require("./src/assets/fonts/ProximaNova/ProximaNova-Regular.otf"),
    ProximaNovaBold: require("./src/assets/fonts/ProximaNova/ProximaNova-Bold.otf"),
    ProximaNovaSemiBold: require("./src/assets/fonts/ProximaNova/ProximaNova-Semibold.otf"),
  });
  if (!loaded || verify.isVerifyLoading || locationLoad) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator user={user} verify={verify.verify} />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
