import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
const CategoryList = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, width: 100 }}
      onPress={() => navigation.navigate("categoryDetail")}
    >
      <View style={{ marginRight: 6 }}>
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
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>{item?.name}</Text>
          <Text style={{ fontSize: 12, color: "gray" }}>{item?.place}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export { CategoryList };
