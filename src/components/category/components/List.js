import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Rating } from ".";
import { Icon } from "react-native-elements";
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
              paddingHorizontal: 10,
              paddingVertical: 5,
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
                  style={{ width: 80, height: 80 }}
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
                style={{ paddingRight: 10 }}
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
              </TouchableOpacity>

              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginTop: 8,
                  alignItems: "center",
                }}
              >
                <Rating />
                <TouchableOpacity
                  style={{
                    borderRadius: 15,
                    backgroundColor: "black",
                    width: 28,
                    height: 28,
                    padding: 1,
                    paddingLeft: 3,
                  }}
                  onPress={() => navigation.navigate("Cart")}
                >
                  <Icon name="add" color="white" type="ionicon" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export { List };
