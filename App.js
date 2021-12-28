import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import { loadAsync } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
const App = () => {
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
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
