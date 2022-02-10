import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
const CategoriesHomePage = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image style={styles.bgColorImage} />
      </View>

      <View style={{ paddingVertical: 6, paddingHorizontal: 2 }}>
        <Text style={styles.bgColor}></Text>
        <Text style={styles.bgColor}></Text>
      </View>
    </View>
  );
};
export { CategoriesHomePage };

const styles = StyleSheet.create({
  container: {
    borderStyle: "dashed",
    borderColor: "#f0f0f0",
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    margin: 4,
    width: "48%",
    height: 170,
    // backgroundColor:'#f4f0ec'
  },
  bgColorImage: {
    backgroundColor: "#f0f0f0",
    width: 90,
    height: 90,
  },
  bgColor: {
    backgroundColor: "#f0f0f0",
    margin: 1,
  },
});
