import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

const CategoryName = ({ categoryName }) => {
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
          <Icon name="flower-outline" size={30} type="ionicon" />
          <Text
            style={{
              marginHorizontal: 4,
              fontSize: 22,
              fontFamily: "ProximaNovaSemiBold",
              textTransform: "capitalize",
            }}
          >
            {categoryName}
          </Text>
        </View>
      </View>
      <View style={{ marginVertical: 4 }}>
        <Text
          style={{ fontSize: 15, color: "gray", fontFamily: "ProximaNova" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been text ever since the 1500s.
        </Text>
      </View>
    </View>
  );
};
export { CategoryName };
