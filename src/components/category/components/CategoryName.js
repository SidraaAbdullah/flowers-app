import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

const CategoryName = () => {
  return (
    <View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>
            <Icon name="flower-outline" size={30} type="ionicon" />
          </Text>
          <Text
            style={{ marginHorizontal: 4, fontSize: 22, fontWeight: "bold" }}
          >
            Flowers
          </Text>
        </View>
        <View>
          <Icon name="location-outline" type="ionicon" />
        </View>
      </View>
      <View style={{ marginVertical: 4 }}>
        <Text style={{ fontSize: 14, color: "gray" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been text ever since the 1500s.
        </Text>
      </View>
    </View>
  );
};
export { CategoryName };
