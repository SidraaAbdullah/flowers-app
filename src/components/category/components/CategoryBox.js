import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CategoryBox = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
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
    borderStyle: "dashed",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    margin: 4,
  },
});
