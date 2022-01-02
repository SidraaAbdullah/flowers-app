import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryHeader = ({ headingText, address }) => {
  return (
    <View
      style={{
        marginBottom: 20,
        justifyContent: "flex-start",
        paddingHorizontal: 20,
      }}
    >
      <Text style={style.text}>{headingText}</Text>
      <Text style={{ display: 'flex', fontFamily: "ProximaNova" }}>
        <Text style={{ fontWeight: 'bold' }}>Delivering to : </Text>
        <Text style={style.address}>{address}</Text>
      </Text>

    </View>
  );
};
export { CategoryHeader };

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "ProximaNovaBold",
  },
  address: {
    fontSize: 14,
    color: "gray",
  }
});
