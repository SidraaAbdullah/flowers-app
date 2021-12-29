import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { CommonButton } from "../buttons";
import Header from "../header";
import { TopSection, CartCard, DeliveryInfo } from "./components";

const Cart = ({ route, navigation }) => {
  const { categoryName, categoryPrice, categoryPlace } = route?.params;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="" />
      <View style={{ marginVertical: 20, flex: 1 }}>
        <TopSection />
        <ScrollView>
          <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
            <View>
              <CartCard
                categoryName={categoryName}
                categoryPrice={categoryPrice}
                categoryPlace={categoryPlace}
              />
              <CartCard
                categoryName={categoryName}
                categoryPrice={categoryPrice}
                categoryPlace={categoryPlace}
              />
              <CartCard
                categoryName={categoryName}
                categoryPrice={categoryPrice}
                categoryPlace={categoryPlace}
              />
              <CartCard
                categoryName={categoryName}
                categoryPrice={categoryPrice}
                categoryPlace={categoryPlace}
              />
              <CartCard
                categoryName={categoryName}
                categoryPrice={categoryPrice}
                categoryPlace={categoryPlace}
              />
              <CartCard
                categoryName={categoryName}
                categoryPrice={categoryPrice}
                categoryPlace={categoryPlace}
              />
            </View>
            <DeliveryInfo navigation={navigation} />
            {/* <View style={{ marginTop: 8, marginHorizontal: 30 }}>
              <CommonButton text="Apply" />
            </View> */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default Cart;
