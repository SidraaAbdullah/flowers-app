import React from "react";
import { ScrollView, Text, View } from "react-native";
import { List } from "../category/components";
import Header from "../header";
import { TopSection } from "./components";
const Cart = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="" />
      <View style={{ marginVertical: 20, flex: 1 }}>
        <TopSection />
        <ScrollView>
          <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default Cart;
