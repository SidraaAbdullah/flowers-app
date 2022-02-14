import React from "react";
import { Overlay } from "react-native-elements";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { CommonButton } from "../buttons";
import LottieView from "lottie-react-native";

const OrderModal = ({ handleOpen, isOpen, navigation }) => {
  return (
    <Overlay
      overlayStyle={{
        borderRadius: 10,
        padding: 20,
        width: "90%",
      }}
      isVisible={isOpen}
      onBackdropPress={handleOpen}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LottieView
          style={{ height: 200, width: 200 }}
          source={require("../../assets/lottie/29390-your-order-is-confirmed.json")}
          autoPlay
          loop={true}
          speed={1}
        />
        <Text style={styles.text}>You have placed the order successfully!</Text>
        <CommonButton
          rightIcon
          onPress={() =>
            navigation.navigate("home", {
              screen: "Order history",
              params: {
                screen: "orderHistory",
              },
            })
          }
          text="Check status of delivery"
        />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "ProximaNovaSemiBold",
    marginBottom: 20,
  },
  status: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "ProximaNova",
    color: "white",
    padding: 10,
    paddingHorizontal: 18,
  },
});

export default OrderModal;
