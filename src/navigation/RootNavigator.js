import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../screens/get-started";
import Register from "../screens/register";
import BottomTab from "./BottomTab";
import ForgotPassword from "../screens/forgot-password";

const RootNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={"getStarted"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={BottomTab} />
      <Stack.Screen name="getStarted" component={GetStarted} />
      <Stack.Screen name="signUp" component={Register} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
export default RootNavigator;
