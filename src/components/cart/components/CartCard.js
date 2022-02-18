import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Count } from ".";
import { RatingsContainer } from "../../category/components/RatingsContainer";
import { DeleteFromCart } from "../../../redux/actions/Cart";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonButton } from "../../buttons";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Icon } from "react-native-elements/dist/icons/Icon";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View style={{ width: "100%", marginBottom: 8 }}>
      <TouchableOpacity></TouchableOpacity>

      <View style={styles.border}>
        <View style={styles.container}>
          <View style={{ width: "30%" }}>
            <Image
              style={{ width: 80, height: 80, resizeMode: "contain" }}
              source={{
                uri:
                  item?.image ||
                  "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
              }}
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
              <Text style={styles.text}>{item?.name}</Text>
              <Text style={styles.text}>Rs: {item?.originalPrice}</Text>
            </View>

            <Text
              numberOfLines={1}
              style={{
                fontFamily: "ProximaNova",
                fontSize: 14,
                marginTop: 3,
                color: "gray",
              }}
            >
              {item?.description}
            </Text>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: 4,
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RatingsContainer rating={item?.rating} />
              </View>
              <Count item={item} />
            </View>
          </View>
        </View>
        <View style={styles.deleteContainer}>
          <View style={styles.delete}>
            <Text
              style={{ color: "white", fontWeight: "700", paddingRight: 3 }}
              onPress={() => dispatch(DeleteFromCart(item))}
            >
              Delete
            </Text>
            <Icon
              name="delete"
              color="white"
              size={15}
              onPress={() => dispatch(DeleteFromCart(item))}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export { CartCard };

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
    textTransform: "capitalize",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  deleteContainer: {
    display: "flex",
    alignItems: "flex-end",
    marginHorizontal: 6,
    marginBottom: 5,
  },
  delete: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FF1843",
    padding: 6,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});
