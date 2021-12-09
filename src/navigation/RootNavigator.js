import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../components/get-started/index";
import SignUp from "../screens/sign-up";

const RootNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={"getStarted"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="getStarted" component={GetStarted} />
      <Stack.Screen name="sign-up" component={SignUp} />
    </Stack.Navigator>
  );
};
export default RootNavigator;
