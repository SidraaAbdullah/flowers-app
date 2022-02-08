import React from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
const SingleProductDetail = () => {
  return (
    <View style={styles.border}>
      <View style={{ alignItems: "center" }}>
        <Image style={styles.bgColorImage} />
      </View>
      <View style={{ paddingVertical: 6, paddingHorizontal: 2 }}>
        <View style={styles.name}></View>
        <Text style={styles.price}></Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.star}></Text>
          <Text style={styles.add}></Text>
        </View>
      </View>
    </View>
  );
};
export { SingleProductDetail };

const styles = StyleSheet.create({
  border: {
    borderWidth: 2,
    justifyContent: "center",
    borderStyle: "dashed",
    borderRadius: 8,
    borderColor: "lightgray",
    paddingTop: 10,
    paddingBottom: 6,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  bgColorImage: {
    backgroundColor: "lightgray",
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  name: {
    backgroundColor: "lightgray",
    margin: 1,
    width: 60,
  },
  price: {
    backgroundColor: "lightgray",
    width: 45,
    margin: 1,
  },
  bgColor: {
    backgroundColor: "lightgray",
    margin: 1,
  },
  star: {
    backgroundColor: "lightgray",
    width: 105,
    marginRight: 15,
    marginTop: 5,
    height: 20,
  },
  add: {
    width: 30,
    height: 30,
    backgroundColor: "lightgray",
    borderRadius: 50,
  },
});
