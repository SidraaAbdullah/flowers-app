import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import Header from "../../header";

const EmptyCart = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="Cart" />
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={styles.text}>Your Cart is empty</Text>
        <TouchableOpacity onPress={() => navigation.navigate("category")}>
          <Text style={[styles.text, { color: "red" }]}>Shop Now...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { EmptyCart };
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "ProximaNovaSemiBold",
  },
});
