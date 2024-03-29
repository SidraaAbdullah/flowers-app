import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import * as Screen from "../screens";
import { useSelector } from "react-redux";

const App = ({ route }) => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const cartItemCount = useSelector((state) => state.cart.addToCart).length;
  return (
    <Tab.Navigator
      initialRouteName={`${route?.params?.cart ? "Cart" : "Discover"}`}
      screenOptions={({ route }) => ({
        headerShown: false,
        headerTitleAlign: "center",
        tabBarStyle: {
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
            : route.name === "Reviews"
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
        tabBarActiveTintColor: "#0E5561",
        tabBarInactiveTintColor: "#BEBECD",
      })}
    >
      <Tab.Screen name="Discover">
        {() => (
          <Stack.Navigator
            ininitialRouteName="category"
            screenOptions={() => ({ headerShown: false })}
          >
            <Stack.Screen name="category" component={Screen.CategoryScreen} />
            <Stack.Screen
              name="categoryDetail"
              component={Screen.DetailCategoryScreen}
            />
            <Stack.Screen
              name="listDetail"
              component={Screen.ListDetailScreen}
            />
            <Stack.Screen
              name="viewReviewsScreen"
              component={Screen.ViewReviewScreen}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Order history">
        {() => (
          <Stack.Navigator
            ininitialRouteName="orderHistory"
            screenOptions={() => ({ headerShown: false })}
          >
            <Stack.Screen
              name="orderHistory"
              component={Screen.OrderHistoryScreen}
            />
            <Stack.Screen
              name="singleOrderHistory"
              component={Screen.SingleOrderHistoryScreen}
            />
            <Stack.Screen name="reviewScreen" component={Screen.ReviewScreen} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Account">
        {() => (
          <Stack.Navigator
            ininitialRouteName="profile"
            screenOptions={() => ({ headerShown: false })}
          >
            <Stack.Screen name="profile" component={Screen.ProfileScreen} />
            <Stack.Screen
              name="changePassword"
              component={Screen.ChangePassScreen}
            />
            <Stack.Screen
              name="personalInfo"
              component={Screen.PersonalInfoScreen}
            />
            <Stack.Screen
              name="addAddress"
              component={Screen.AddAddressScreen}
            />
            <Stack.Screen
              name="newAddress"
              component={Screen.NewAddressScreen}
            />
            <Stack.Screen
              name="newAddressMap"
              component={Screen.MapScreenAddress}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={Screen.CartScreen}
        options={{ tabBarBadge: cartItemCount }}
      />
    </Tab.Navigator>
  );
};
export default App;
