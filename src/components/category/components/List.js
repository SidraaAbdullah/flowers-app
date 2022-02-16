import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/Cart";
import { RatingsContainer } from "./RatingsContainer";

const List = ({ item, navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    setQuantity(quantity + 1);
    item.quantity = quantity;
    dispatch(addToCart(item));
  };
  return (
    <View style={{ width: "100%" }}>
      <View style={{ marginHorizontal: 5, marginBottom: 8 }}>
        <View style={styles.border}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("listDetail", {
                  item: item,
                })
              }
              activeOpacity={0.5}
            >
              <View style={{ width: "30%" }}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={{
                    uri:
                      item?.image ||
                      "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
                  }}
                />
              </View>
            </TouchableOpacity>

            <View style={{ width: "70%" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("listDetail", {
                    item: item,
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
                  }}
                >
                  {item?.description}
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
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RatingsContainer />
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
                    name="cart-outline"
                    size={19}
                    color="#0E5561"
                    type="ionicon"
                  />
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

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    justifyContent: "center",
    borderStyle: "dashed",
    borderRadius: 8,
    borderColor: "lightgray",
    backgroundColor: "white",
  },
  text: {
    fontFamily: "ProximaNovaSemiBold",
    fontSize: 15,
    color: "black",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
