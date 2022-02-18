import React from "react";
import { View, Text, Image } from "react-native";

const CategoryName = ({ item }) => {
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
          <Image
            source={{ uri: item?.image }}
            style={{ width: 40, height: 40, resizeMode: "contain" }}
          />
          <Text
            style={{
              marginHorizontal: 4,
              fontSize: 22,
              fontFamily: "ProximaNovaSemiBold",
              textTransform: "capitalize",
            }}
          >
            {item?.name}
          </Text>
        </View>
      </View>
      <View style={{ marginVertical: 4 }}>
        <Text
          style={{ fontSize: 15, color: "gray", fontFamily: "ProximaNova" }}
        >
          {item?.description}
        </Text>
      </View>
    </View>
  );
};
export { CategoryName };
