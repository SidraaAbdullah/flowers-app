import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
const OrderListSkeleton = () => {
  return (
    <View style={styles.border}>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "30%" }}>
          <Image style={styles.bgColorImage} />
        </View>
        <View style={{ width: "70%" }}>
          <View style={[styles.container, { marginBottom: 3 }]}>
            <View style={{ width: 95 }}>
              <Text style={styles.bgColor}></Text>
            </View>
            <View style={{ width: 40 }}>
              <Text style={styles.bgColor}></Text>
            </View>
          </View>
          <Text numberOfLines={1} style={styles.bgColor}></Text>
          <View
            style={{
              width: 70,
            }}
          >
            <Text style={styles.bgColor}></Text>
          </View>
          <View style={[styles.container, { marginBottom: 3 }]}>
            <View style={{ width: 40 }}>
              <Text style={styles.bgColor}></Text>
            </View>
            <View style={{ width: 95 }}>
              <Text style={styles.bgColor}></Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export { OrderListSkeleton };

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  border: {
    borderWidth: 2,
    justifyContent: "center",
    borderStyle: "dashed",
    borderRadius: 8,
    borderColor: "lightgray",
    backgroundColor: "white",
    marginBottom: 8,
  },
  bgColorImage: {
    backgroundColor: "lightgray",
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  bgColor: {
    backgroundColor: "lightgray",
    margin: 1,
  },
});
