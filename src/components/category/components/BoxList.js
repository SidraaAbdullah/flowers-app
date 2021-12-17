import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
const BoxList = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ width: "50%" }}>
      <View style={{ marginBottom: 20, marginRight: 14 }}>
        <View
          style={{
            borderWidth: 1,
            justifyContent: "center",
            borderStyle: "dashed",
            borderRadius: 8,
            borderColor: "gray",
            paddingTop: 10,
            paddingBottom: 6,
            paddingHorizontal: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Image style={{ width: 90, height: 90 }} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 5,
            }}
          >
            <Text>60$</Text>
            <Text>Icon</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 3 }}>
          <Text style={{ fontSize: 14 }}>{item?.name}</Text>
          <Text numberOfLines={1} style={{ fontSize: 12, color: "gray" }}>
            {item?.place}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 12, color: "black" }}>
              {item?.delivery}
            </Text>
            <Text style={{ fontSize: 12, color: "black" }}>{item?.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export { BoxList };
