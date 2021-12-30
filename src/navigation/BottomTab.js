import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/cart";
import AccountScreen from "../screens/account";
import { Icon } from "react-native-elements";
import Profile from "../screens/profile";
import ChangePassword from "../screens/change-password";
import PersonalInformation from "../screens/personal-infomation";
import AddAddress from "../screens/add-address";
import { createStackNavigator } from "@react-navigation/stack";
import NewAddress from "../screens/new-address";
import Category from "../screens/category";
import CategoryDetail from "../screens/category-detail";
import ListDetail from "../screens/list-detail";
import OrderHistory from "../screens/order-history";
import SingleOrderHistory from "../screens/single-order-history";

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Discover"
      screenOptions={({ route }) => ({
        headerShown: false,
        headerTitleAlign: "center",
        tabBarStyle: {
          paddingBottom: 3,
          fontFamily: "ProximaNovaSemiBold",
        },
        tabBarIcon: ({ color, type }) => {
          let iconName;
          route.name === "Cart"
            ? (iconName = "cart-plus")
            : route.name === "Order history"
            ? ((iconName = "document-text"), (type = "ionicon"))
            : route.name === "Account"
            ? (iconName = "user-circle")
            : route.name === "Discover"
            ? (iconName = "search")
            : route.name === "Partners"
            ? (iconName = "")
            : null;
          return (
            <Icon
              type={type || "font-awesome"}
              name={iconName}
              size={25}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Discover">
        {() => (
          <Stack.Navigator
            ininitialRouteName="category"
            screenOptions={() => ({ headerShown: false })}
          >
            <Stack.Screen name="category" component={Category} />
            <Stack.Screen name="categoryDetail" component={CategoryDetail} />
            <Stack.Screen name="listDetail" component={ListDetail} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Order history">
        {() => (
          <Stack.Navigator
            ininitialRouteName="orderHistory"
            screenOptions={() => ({ headerShown: false })}
          >
            <Stack.Screen name="orderHistory" component={OrderHistory} />
            <Stack.Screen
              name="singleOrderHistory"
              component={SingleOrderHistory}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Account">
        {() => (
          <Stack.Navigator
            ininitialRouteName="profile"
            screenOptions={() => ({ headerShown: false })}
          >
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="changePassword" component={ChangePassword} />
            <Stack.Screen name="personalInfo" component={PersonalInformation} />
            <Stack.Screen name="addAddress" component={AddAddress} />
            <Stack.Screen name="newAddress" component={NewAddress} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Partners" component={AccountScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};
export default App;
