import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import * as Screen from "../screens";
import { useMutation } from "react-query";
import { VERIFY_USER } from "../queries";
import AppLoading from "expo-app-loading";

const RootNavigator = ({ user }) => {
  const Stack = createStackNavigator();
  const { mutate: verifyUser, isLoading: verifyLoading } =
    useMutation(VERIFY_USER);
  const [verify, setVerify] = useState(false);

  useEffect(async () => {
    if (user) {
      await verifyUser(
        {},
        {
          onError: () => {
            setVerify(false);
          },
          onSuccess: () => {
            setVerify(true);
          },
        }
      );
    }
  }, []);

  if (verifyLoading) {
    return <AppLoading />;
  }
  return (
    <Stack.Navigator
      initialRouteName={user && verify ? "home" : "signUp"}
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
