import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonButton } from "../buttons";
import Header from "../header";
import OrderModal from "../modal/OrderModal";
import { TopSection, CartCard, DeliveryInfo } from "./components";
import { useMutation } from "react-query";
import { ADD_ORDER } from "../../queries";
import { useSelector } from "react-redux";

const Cart = ({ navigation, cartItems }) => {
  const { mutate: addOrder } = useMutation(ADD_ORDER);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const prices = cartItems.map((p) => p?.price * p?.quantity);
  const totalPrice = prices?.reduce(
    (previous, current) => (previous += current)
  );

  const filterCartItems = (items) => {
    let orderItems = [];
    cartItems.map((item) => {
      const { _id, quantity, price = totalPrice } = item;
      orderItems.push({ product_id: _id, quantity, price });
    });
    return orderItems;
  };

  const handleAddOrder = () => {
    addOrder(
      {
        products: filterCartItems(cartItems),
        deliveryAddress: user?.primaryDeliveryAddress?._id,
        delivery_charges: "20",
        special_note: "Deliver early please!",
      },
      {
        onError: (e) => {
          if (e.response.status == 401) {
            navigation.navigate("signUp", { cart: true });
          }
        },
        onSuccess: () => {
          handleOpen();
        },
      }
    );
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="Cart" screen="category" />
      <View style={{ marginVertical: 5, marginTop: 20, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TopSection />
          <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
            {cartItems?.map((item) => (
              <CartCard item={item} key={item?._id} />
            ))}
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
              <Text style={[styles.text, { color: "red" }]}>
                Rs: {totalPrice}
              </Text>
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
              onPress={handleAddOrder}
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
