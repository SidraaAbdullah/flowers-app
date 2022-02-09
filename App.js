import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import { useFonts } from "expo-font";
import { QueryClientProvider, QueryClient } from "react-query";
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

const App = () => {
  const [user, isLoading] = useStorage("logIn", { isObject: true });
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
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
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if (location) {
        setLocation(location);
        const { latitude, longitude, accuracy, altitude } =
          location.coords || {};
        const address = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
          accuracy,
          altitude,
        });
        console.log(address);
      }

      // Geocoder.from(lat, long)
      //   .then((json) => {
      //     var addressComponent = json.results[0].address_components[0];
      //     console.log({ addressComponent });
      //   })
      //   .catch((error) => console.warn(error));
      // Works as well :
      // ------------

      // location object
      // Geocoder.from({
      //   // latitude: 41.89,
      //   // longitude: 12.49,
      //   lat,
      //   lon,
      // });

      // // latlng object
      // Geocoder.from({
      //   lat: 41.89,
      //   lng: 12.49,
      // });

      // // array
      // Geocoder.from([41.89, 12.49]);
      console.log(location);
    })();
  }, []);
  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  const [loaded] = useFonts({
    ProximaNova: require("./src/assets/fonts/ProximaNova/ProximaNova-Regular.otf"),
    ProximaNovaBold: require("./src/assets/fonts/ProximaNova/ProximaNova-Bold.otf"),
    ProximaNovaSemiBold: require("./src/assets/fonts/ProximaNova/ProximaNova-Semibold.otf"),
  });
  if (!loaded || verify.isVerifyLoading) {
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
