import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Count, Rating } from "../../category/components";

const CartCard = ({ categoryName, categoryPrice, categoryPlace }) => {
  return (
    <View style={{ width: "100%", marginBottom: 8 }}>
      <View style={styles.border}>
        <View style={styles.container}>
          <View style={{ width: "30%" }}>
            <Image
              style={{ width: 80, height: 80 }}
              source={{
                uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
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
              <Text style={styles.text}>{categoryName || "Flower"}</Text>
              <Text style={styles.text}>{categoryPrice || "40$"}</Text>
            </View>

            <Text
              numberOfLines={1}
              style={{
                fontFamily: "ProximaNova",
                fontSize: 14,
                color: "gray",
              }}
            >
              {categoryPlace || "Loreum"}
            </Text>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: 8,
                alignItems: "center",
              }}
            >
              <Rating />
              <Count />
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
    borderColor: "gray",
    backgroundColor: "white",
  },
  text: {
    fontFamily: "ProximaNovaSemiBold",
    fontSize: 15,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
