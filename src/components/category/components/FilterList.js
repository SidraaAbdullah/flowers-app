import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
const FilterList = ({ item }) => {
  return (
    <TouchableOpacity style={{ flex: 1, marginVertical: 15 }}>
      <View
        style={{
          marginRight: 10,
          borderColor: "green",
          borderRadius: 50,
          borderWidth: 1,
          color: "green",
          paddingVertical: 3,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ color: "green", fontFamily: "ProximaNova" }}>
          {item?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export { FilterList };