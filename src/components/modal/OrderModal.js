import React from "react";
import { Overlay } from "react-native-elements";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const OrderModal = ({ handleOpen, isOpen, navigation }) => {
  return (
    <Overlay
      overlayStyle={{
        borderRadius: 10,
        padding: 30,
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
        <Image
          source={require("../../assets/images/check.png")}
          style={{ height: 90, width: 90 }}
        />
        <Text style={styles.text}>You have placed the order successfully!</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Text style={styles.status}>Check status of delivery</Text>
        </TouchableOpacity>
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
  },
  status: {
    paddingTop: 25,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "ProximaNova",
    color: "blue",
  },
});

export default OrderModal;
