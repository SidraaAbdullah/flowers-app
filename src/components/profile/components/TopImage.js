import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ArrowButton } from ".";
const TopImage = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          marginVertical: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Image</Text>
        <Text style={style.text}>Profile Information</Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: "center",
            paddingHorizontal: 40,
            color: "gray",
          }}
        >
          Loreum ipsum dolor sit amet, consectetur non adipiscing elit.
        </Text>
      </View>
      <ArrowButton text="Add Address" icon="book-outline" />
      <ArrowButton text="Personal Information" icon="person-outline" />
      <ArrowButton text="Change Password" icon="lock-closed-outline" />
    </View>
  );
};
export { TopImage };

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 5,
  },
});
