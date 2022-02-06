import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
const Rating = () => {
  return (
    <View
      style={{
        paddingVertical: 5,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Icon name="star" color="#ffbd11" size={18} type="font-awesome" />
      <Icon name="star" color="#ffbd11" size={18} type="font-awesome" />
      <Icon name="star" color="#ffbd11" size={18} type="font-awesome" />
      <Icon name="star" color="lightgray" size={18} type="font-awesome" />
      <Icon name="star" color="lightgray" size={18} type="font-awesome" />
      <Text
        style={{
          color: "black",
          marginLeft: 5,
          marginTop: 3,
          fontFamily: "ProximaNovaSemiBold",
          fontSize: 14,
        }}
      >
        4.6
      </Text>
    </View>
  );
};
export { Rating };
