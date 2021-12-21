import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { CommonButton } from "../../buttons";
import { Rating } from ".";
const BoxList = ({ item, navigation }) => {
  return (
    <View style={{ width: "50%" }}>
      <View style={{ marginBottom: 8, marginRight: 8 }}>
        <View
          style={{
            borderWidth: 1,
            justifyContent: "center",
            borderStyle: "dashed",
            borderRadius: 8,
            borderColor: "gray",
            paddingTop: 10,
            paddingBottom: 6,
            paddingHorizontal: 8,
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
                marginBottom: 5,
              }}
            >
              <Image
                source={{
                  uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
                }}
                style={{ width: 120, height: 120 }}
              />
            </View>
            <View
              style={{
                paddingVertical: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 14 }}>{item?.name}</Text>
                <Text>60$</Text>
              </View>

              <Text numberOfLines={1} style={{ fontSize: 12, color: "gray" }}>
                {item?.place}
              </Text>
            </View>
          </TouchableOpacity>
          <Rating />
          <CommonButton text="Add to Cart" paddingVertical={7} />
        </View>
      </View>
    </View>
  );
};
export { BoxList };
