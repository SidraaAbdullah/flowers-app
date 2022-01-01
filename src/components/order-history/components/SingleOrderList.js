import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Count, Rating } from "../../category/components";

const SingleOrderList = () => {
  return (
    <View style={{ width: "100%", marginBottom: 12 }}>
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
              <Text style={styles.text}>{"Flower"}</Text>
              <Text style={styles.text}>{"40$"}</Text>
            </View>

            <Text
              numberOfLines={1}
              style={{
                fontFamily: "ProximaNova",
                fontSize: 14,
                color: "gray",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: 4,
                alignItems: "center",
              }}
            >
              <Rating />
              <Count />
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
          <Text style={[styles.text, { paddingVertical: 8 }]}>ReOrder</Text>
          <Text style={[styles.text, { paddingVertical: 8 }]}>Rate</Text>
        </View>
      </View>
    </View>
  );
};
export { SingleOrderList };

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
    fontSize: 17,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});