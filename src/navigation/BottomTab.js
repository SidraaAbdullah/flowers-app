import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/cart";
import AccountScreen from "../screens/account";
import { Icon } from "react-native-elements";
import Profile from "../screens/profile";

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Account"
      screenOptions={({ route }) => ({
        headerShown: false,
        headerTitleAlign: "center",
        tabBarStyle: {
          paddingBottom: 3,
        },
        tabBarIcon: ({ color }) => {
          let iconName;
          route.name === "Cart"
            ? (iconName = "cart-plus")
            : route.name === "Order history"
            ? (iconName = "")
            : route.name === "Account"
            ? (iconName = "user-circle")
            : route.name === "Discover"
            ? (iconName = "")
            : route.name === "Partners"
            ? (iconName = "")
            : null;
          return (
            <Icon type="font-awesome" name={iconName} size={25} color={color} />
          );
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Discover" component={AccountScreen} />
      <Tab.Screen name="Order history" component={CartScreen} />
      <Tab.Screen name="Account" component={Profile} />
      <Tab.Screen name="Partners" component={AccountScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};
export default App;
