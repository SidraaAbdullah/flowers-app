import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Rating = ({
  starSize,
  filled,
  containerPadding,
  containerBgColor,
  type,
  padding,
}) => {
  return (
    <View
      style={
        ({
          paddingHorizontal: containerPadding ? containerPadding : 2,
          backgroundColor: containerBgColor ? containerBgColor : "transparent",
        },
        padding ? { alignItems: "center" } : {})
      }
    >
      <FontAwesome
        style={padding ? { marginLeft: "6%", marginRight: "6%" } : {}}
        name={type === "half" ? "star-half-empty" : "star"}
        size={starSize ? starSize : 20}
        color={type === "filled" || type === "half" ? "#ffbd11" : "lightgray"}
      />
    </View>
  );
};
export { Rating };

const styles = StyleSheet.create({
  container: {},
});
