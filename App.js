import React, { useEffect, useState } from "react";
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
import AppLoading from 'expo-app-loading';
import { Provider } from "react-redux";
import store from "./src/redux/Store";

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
  if (isLoading) {
    return (
      <AppLoading
      />
    );
  }
  
  const [loaded] = useFonts({
    ProximaNova: require("./src/assets/fonts/ProximaNova/ProximaNova-Regular.otf"),
    ProximaNovaBold: require("./src/assets/fonts/ProximaNova/ProximaNova-Bold.otf"),
    ProximaNovaSemiBold: require("./src/assets/fonts/ProximaNova/ProximaNova-Semibold.otf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator user={user} />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
