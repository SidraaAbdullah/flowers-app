import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
const CategoryList = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, width: 140 }}
      onPress={() => navigation.navigate("categoryDetail")}
    >
      <View style={{ marginRight: 10 }}>
        <View
          style={{
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderStyle: "dashed",
            borderRadius: 5,
            borderColor: "gray",
          }}
        >
          <Text>Image</Text>
        </View>
        <View>
          <Text style={{ fontSize: 15 }}>{item?.name}</Text>
          <Text style={{ fontSize: 12, color: "gray" }}>{item?.place}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export { CategoryList };
