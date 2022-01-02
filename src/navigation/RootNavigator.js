import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../screens/get-started";
import Register from "../screens/register";
import BottomTab from "./BottomTab";
import ForgotPassword from "../screens/forgot-password";
import CategoryScreen from "../screens/category"
import ReviewScreen from "../screens/reviews";
import ViewReviewScreen from "../screens/view-reviews";

const RootNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={"reviewScreen"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={BottomTab} />
      <Stack.Screen name="categoryScreen" component={CategoryScreen} />
      <Stack.Screen name="getStarted" component={GetStarted} />
      <Stack.Screen name="signUp" component={Register} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="reviewScreen" component={ReviewScreen} />
      <Stack.Screen name="ViewReviewsScreen" component={ViewReviewScreen} />
    </Stack.Navigator>
  );
};
export default RootNavigator;
