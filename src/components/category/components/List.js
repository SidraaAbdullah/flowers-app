import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

const List = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ width: "100%" }}>
      <View style={{ marginRight: 14, marginBottom: 12 }}>
        <View
          style={{
            borderWidth: 1,
            justifyContent: "center",
            borderStyle: "dashed",
            borderRadius: 8,
            borderColor: "gray",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <View style={{ width: "30%", paddingHorizontal: 10 }}>
              <Image              
                style={{ width: 30, height: 20 }}
              />
            </View>
            <View style={{ width: "70%" }}>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 14 }}>{item?.name}</Text>
                <Text style={{ fontSize: 14 }}> {item?.price}</Text>
              </View>

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
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export { List };
