import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity, View, Text } from "react-native";

const Count = () => {
  const [number, setNumber] = useState(0);
  const increment = () => setNumber(number + 1);
  let decrement = () => setNumber(number - 1);
  if (number <= 0) {
    decrement = () => setNumber(0);
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => decrement()}>
        <Icon name="minus" size={18} color="gray" type="font-awesome" />
      </TouchableOpacity>

      <Text
        style={{
          marginHorizontal: 8,
          fontWeight: "bold",
          fontSize: 16,
          borderRadius: 6,
          borderWidth: 1,
          borderStyle: "dashed",
          borderColor: "gray",
          paddingHorizontal: 7,
          color: "black",
          backgroundColor: "#f1f1f1",
        }}
      >
        {number}
      </Text>
      <TouchableOpacity onPress={() => increment()}>
        <Icon name="plus" color="gray" size={18} type="font-awesome" />
      </TouchableOpacity>
    </View>
  );
};

export { Count };
