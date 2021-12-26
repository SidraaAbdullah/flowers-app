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
      }}
    >
      <Icon name="star-outline" color="gray" size={18} type="ionicon" />
      <Icon name="star-outline" color="gray" size={18} type="ionicon" />
      <Icon name="star-outline" color="gray" size={18} type="ionicon" />
      <Icon name="star-outline" color="gray" size={18} type="ionicon" />
      <Icon name="star-outline" color="gray" size={18} type="ionicon" />
      <Text style={{ color: "black", marginLeft: 5, marginTop: 1 }}>4.6</Text>
    </View>
  );
};
export { Rating };
