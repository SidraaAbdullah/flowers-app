import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import { loadAsync } from "expo-font";
import { QueryClientProvider, QueryClient } from "react-query";
import useStorage from "./src/hooks/useStorage";
import axios from "axios";
import {
  defaultQueryFn,
  defaultMutationFn,
  reactQueryConfig,
} from "./src/constants";
import AppLoading from 'expo-app-loading';

const App = () => {
  const [user, isLoading] = useStorage('User', { isObject: true });
  if (user) {
    axios.defaults.headers.common.Authorization = `bearer ${user?.access_token}`;
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
  useEffect(() => {
    (async () => {
      try {
        await loadAsync({
          // Load a font `Montserrat` from a static resource
          ProximaNova: require("./src/assets/fonts/ProximaNova/ProximaNova-Regular.otf"),
          ProximaNovaBold: require("./src/assets/fonts/ProximaNova/ProximaNova-Bold.otf"),
          ProximaNovaSemiBold: require("./src/assets/fonts/ProximaNova/ProximaNova-Semibold.otf"),
        });
      } catch {
        // console.log('App.js Error');
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <AppLoading
      />
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator user={user} />
      </NavigationContainer>
    </QueryClientProvider>
  );
};
export default App;
