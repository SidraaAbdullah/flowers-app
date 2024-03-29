import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import * as Screen from "../screens";
import useStorage from "../hooks/useStorage";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/User";

const RootNavigator = ({ verify, startingScreens }) => {
  const Stack = createStackNavigator();
  const [user, isLoading] = useStorage("logIn", { isObject: true });
  const dispatch = useDispatch();
  if (verify) {
    dispatch(addUser(user));
  }
  return (
    <Stack.Navigator
      initialRouteName={startingScreens ? "home" : "getStarted"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="signUp" component={Screen.RegisterScreen} />
      <Stack.Screen name="getStarted" component={Screen.GetStartedScreen} />
      <Stack.Screen name="home" component={BottomTab} />
      <Stack.Screen
        name="forgotPassword"
        component={Screen.ForgetPasswordScreen}
      />
    </Stack.Navigator>
  );
};
export default RootNavigator;
