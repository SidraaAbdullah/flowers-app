import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const CategoryBox = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri:
              item?.image ||
              "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
          }}
          style={{ width: 90, height: 90 }}
        />
      </View>

      <View style={{ paddingVertical: 6, paddingHorizontal: 2 }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "ProximaNovaSemiBold",
            textTransform: "capitalize",
          }}
        >
          {item?.name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "gray",
            fontFamily: "ProximaNova",
            marginTop: 5,
          }}
        >
          {item?.description}
        </Text>
      </View>
    </View>
  );
};
export { CategoryBox };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderStyle: "dashed",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    marginBottom: 10,
    height: 170,
  },
});
