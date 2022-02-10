import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import * as Screen from "../screens";
import useStorage from "../hooks/useStorage";

const RootNavigator = ({ verify }) => {
  const Stack = createStackNavigator();
  const [user, isLoading] = useStorage("logIn", { isObject: true });

  return (
    <Stack.Navigator
      initialRouteName={user.access_token ? "home" : "signUp"}
      screenOptions={{ headerShown: false }}
    >
      {!user.access_token && (
        <React.Fragment>
          <Stack.Screen name="signUp" component={Screen.RegisterScreen} />
          <Stack.Screen name="getStarted" component={Screen.GetStartedScreen} />
        </React.Fragment>
      )}
      <Stack.Screen name="home" component={BottomTab} />
      <Stack.Screen
        name="forgotPassword"
        component={Screen.ForgetPasswordScreen}
      />
    </Stack.Navigator>
  );
};
export default RootNavigator;
