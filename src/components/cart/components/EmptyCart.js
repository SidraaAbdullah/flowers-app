import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import Header from "../../header";
import LottieView from "lottie-react-native";
import { CommonButton } from "../../buttons";

const EmptyCart = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="Cart" />

      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <LottieView
          style={{ width: 280, height: 280 }}
          source={require("../../../assets/lottie/87507-cart-items-added.json")}
          autoPlay
          loop
          speed={1}
        />
        <Text style={styles.text}>There are no items in this cart.</Text>

        <CommonButton
          style={{ width: "80%", marginTop: 25 }}
          text="Shop Now"
          rightIcon
          rightIconName="cart-outline"
          bgColor="#ffbd11"
          color="black"
          onPress={() => navigation.navigate("category")}
        />
      </View>
    </View>
  );
};

export { EmptyCart };
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "ProximaNovaSemiBold",
    marginTop: 10,
  },
});
