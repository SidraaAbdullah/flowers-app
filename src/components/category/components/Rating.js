import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
const Rating = () => {
  return (
    <View
      style={{
        paddingVertical: 5,
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Icon name="star-outline" color="gray" size={21} type="ionicon" />
      <Icon name="star-outline" color="gray" size={21} type="ionicon" />
      <Icon name="star-outline" color="gray" size={21} type="ionicon" />
      <Icon name="star-outline" color="gray" size={21} type="ionicon" />
      <Icon name="star-outline" color="gray" size={21} type="ionicon" />
    </View>
  );
};
export { Rating };
