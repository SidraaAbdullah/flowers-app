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
import { totalPrice } from "../../util/totalPrice";
import { CommentBox } from "../../components/review/components/commentBox";

const Cart = ({ navigation, cartItems }) => {
  const { mutate: addOrder } = useMutation(ADD_ORDER);
  const [comment, setComment] = useState("");
  const [deliveryCharges, setDeliveryCharges] = useState(150);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const finalPrice = totalPrice({
    products: cartItems,
    delivery_charges: deliveryCharges,
  });
  const filterCartItems = () => {
    let orderItems = [];
    cartItems.map((item) => {
      const { _id, quantity, originalPrice } = item;
      orderItems.push({ product_id: _id, quantity, price: originalPrice });
    });
    return orderItems;
  };

  const handleAddOrder = () => {
    addOrder(
      {
        products: filterCartItems(),
        deliveryAddress: user?.primaryDeliveryAddress?._id,
        delivery_charges: String(deliveryCharges),
        special_note: comment,
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
            <CommentBox comment={comment} setComment={setComment} />
            <DeliveryInfo user={user} navigation={navigation} />
            <View
              style={{
                justifyContent: "space-between",
                marginBottom: 8,
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.text}>Delivery Charges: </Text>
                <Text style={[styles.text, { color: "red" }]}>
                  Rs: {deliveryCharges}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.text}>Total: </Text>
                <Text style={[styles.text, { color: "red" }]}>
                  Rs: {finalPrice}
                </Text>
              </View>
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
                borderColor: "#FF1843",
              }}
            >
              <Icon
                name="info-circle"
                type="font-awesome"
                size={19}
                color="#FF1843"
              />
              <Text style={[styles.text, { paddingLeft: 5, color: "#FF1843" }]}>
                Pay Cash on delivery
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleAddOrder}
              activeOpacity={0.4}
              style={{ marginHorizontal: 35, marginVertical: 5 }}
            >
              <CommonButton text="Order Now" bgColor="#FF1843" />
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
