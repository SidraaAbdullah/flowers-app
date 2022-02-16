import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Count } from ".";
import { RatingsContainer } from "../../category/components/RatingsContainer";

const CartCard = ({ item }) => {
  const [count, setCount] = useState(item?.quantity);
  return (
    <View style={{ width: "100%", marginBottom: 8 }}>
      <View style={styles.border}>
        <View style={styles.container}>
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
          <View style={{ width: "70%" }}>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.text}>{item?.name}</Text>
              <Text style={styles.text}>Rs: {item?.price}</Text>
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
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: 4,
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RatingsContainer />
              </View>
              <Count count={count} setCount={setCount} />
            </View>
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
});
