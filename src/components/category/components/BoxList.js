import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { RatingsContainer } from "../components/RatingsContainer";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/Cart";

const BoxList = ({ item, navigation }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    if (!item?.originalPrice) {
      item.originalPrice = item?.price;
    }
    dispatch(addToCart(item));
  };
  return (
    <View style={{ width: "50%" }}>
      <View style={{ marginBottom: 8, marginHorizontal: 5 }}>
        <View style={styles.border}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() =>
              navigation.navigate("listDetail", {
                item: item,
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
                  uri:
                    item?.image ||
                    "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
                }}
                style={{ width: "100%", height: 90, resizeMode: "contain" }}
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
                <Text style={styles.text}>{item?.name}</Text>
                <Text style={[styles.text, { color: "#0E5561" }]}>
                  Rs: {item?.price}
                </Text>
              </View>

              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "ProximaNova",
                  fontSize: 14,
                  color: "gray",
                  marginTop: 2,
                }}
              >
                {item?.description}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RatingsContainer rating={item?.rating} />
            </View>

            <TouchableOpacity
              onPress={() => handleAddToCart(item)}
              style={{
                borderRadius: 15,
                backgroundColor: "white",
                padding: 4,
                paddingHorizontal: 5,
                elevation: 3,
              }}
            >
              <Icon
                size={20}
                name="cart-outline"
                color="#0E5561"
                type="ionicon"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export { BoxList };

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    justifyContent: "center",
    borderStyle: "dashed",
    borderRadius: 8,
    borderColor: "lightgray",
    paddingTop: 10,
    paddingBottom: 6,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  text: {
    fontFamily: "ProximaNovaSemiBold",
    fontSize: 15,
  },
});
