import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import * as Screen from "../screens";

const RootNavigator = ({ user }) => {
  const Stack = createStackNavigator();
  console.log(user);
  return (
    <Stack.Navigator
      initialRouteName={"getStarted"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={BottomTab} />
      <Stack.Screen name="getStarted" component={Screen.GetStartedScreen} />
      <Stack.Screen name="signUp" component={Screen.RegisterScreen} />
      <Stack.Screen
        name="forgotPassword"
        component={Screen.ForgetPasswordScreen}
      />
    </Stack.Navigator>
  );
};
export default RootNavigator;
