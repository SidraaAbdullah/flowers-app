import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
const AddressSkeleton = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.radio}></Text>
        <Text style={styles.address}></Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.radio}></Text>
        <Text style={styles.address}></Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.radio}></Text>
        <Text style={styles.address}></Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.radio}></Text>
        <Text style={styles.address}></Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.radio}></Text>
        <Text style={styles.address}></Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.radio}></Text>
        <Text style={styles.address}></Text>
      </View>
    </View>
  );
};
export { AddressSkeleton };

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom:20
  },
  radio: {
    width: 35,
    height: 35,
    backgroundColor: "#f0f0f0",
    borderRadius: 50,
    marginRight: 20,
  },
  address: {
    backgroundColor: "#f0f0f0",
    margin: 1,
    width: 180,
  },
});
