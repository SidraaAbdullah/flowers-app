import React from "react";
import { View, Text, StyleSheet } from "react-native";
const TopImage = ({ headingText }) => {
  return (
    <View
      style={{
        marginTop: 40,
        marginBottom:30,        
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Image</Text>
      <Text style={style.text}>{headingText}</Text>
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
  );
};
export { TopImage };

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 5,
  },
});
