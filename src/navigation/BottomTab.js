import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/cart";
import AccountScreen from "../screens/account";
import { Icon } from "react-native-elements";
const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Discover"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          route.name === "Cart"
            ? (iconName = "cart-plus")
            : route.name === "Order history"
            ? (iconName = "file")
            : route.name === "Account"
            ? (iconName = "cart-plus")
            : route.name === "Discover"
            ? (iconName = "cart-plus")
            : null;
          return (
            <Icon type="font-awesome" name={iconName} size={25} color={color} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Discover" component={AccountScreen} />
      <Tab.Screen name="Order history" component={CartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};
export default App;
