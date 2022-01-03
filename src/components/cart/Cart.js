import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonButton } from "../buttons";
import Header from "../header";
import OrderModal from "../modal/OrderModal";
import { TopSection, CartCard, DeliveryInfo } from "./components";

const Cart = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="" />
      <View style={{ marginVertical: 20, marginBottom: 5, flex: 1 }}>
        <TopSection />
        <ScrollView>
          <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
            <View>
              <CartCard />
              <CartCard />
              <CartCard />
            </View>
            <DeliveryInfo navigation={navigation} />
            <View
              style={{
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 8,
              }}
            >
              <Text style={styles.text}>Total: </Text>
              <Text style={[styles.text, { color: "red" }]}>60$</Text>
            </View>
            <View
              style={{
                borderStyle: "dashed",
                borderWidth: 1,
                borderRadius: 5,
                marginVertical: 5,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                flexDirection: "row",
                borderColor: "green",
              }}
            >
              <Icon
                name="info-circle"
                type="font-awesome"
                size={19}
                color="green"
              />
              <Text style={[styles.text, { paddingLeft: 5, color: "green" }]}>
                Pay Cash on delivery
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleOpen}
              activeOpacity={1}
              style={{ marginHorizontal: 35, marginVertical: 5 }}
            >
              <CommonButton text="Order Now" bgColor="green" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <OrderModal
        handleOpen={handleOpen}
        isOpen={isOpen}
        navigation={navigation}
      />
    </View>
  );
};
export default Cart;
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "ProximaNovaSemiBold",
  },
});
