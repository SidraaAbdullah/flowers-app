import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Count } from ".";

const BoxList = ({ item, navigation }) => {
  return (
    <View style={{ width: "50%" }}>
      <View style={{ marginBottom: 20, marginRight: 14 }}>
        <View
          style={{
            borderWidth: 1,
            justifyContent: "center",
            borderStyle: "dashed",
            borderRadius: 10,
            borderColor: "gray",
            paddingTop: 10,
            paddingBottom: 6,
            paddingHorizontal: 5,
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("listDetail", {
                name: item.name,
                price: item.price,
              })
            }
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Image
                source={{
                  uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
                }}
                style={{ width: 90, height: 90 }}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 5,
              paddingVertical: 5,
            }}
          >
            <Text>60$</Text>
            <Count />
          </View>
        </View>
        <View style={{ paddingHorizontal: 5 }}>
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
    </View>
  );
};
export { BoxList };
