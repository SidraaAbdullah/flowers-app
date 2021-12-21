import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Count } from ".";

const List = ({ item, navigation }) => {
  return (
    <View style={{ width: "100%" }}>
      <View style={{ marginRight: 8, marginBottom: 8 }}>
        <View
          style={{
            borderWidth: 1,
            justifyContent: "center",
            borderStyle: "dashed",
            borderRadius: 8,
            borderColor: "gray",
            backgroundColor: "white",
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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("listDetail", {
                  name: item.name,
                  price: item.price,
                })
              }
              activeOpacity={0.5}
            >
              <View style={{ width: "30%" }}>
                <Image
                  style={{ width: 70, height: 70 }}
                  source={{
                    uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
                  }}
                />
              </View>
            </TouchableOpacity>

            <View style={{ width: "70%" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("listDetail", {
                    name: item.name,
                    price: item.price,
                  })
                }
                activeOpacity={0.5}
              >
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
              </TouchableOpacity>

              <Count />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export { List };
