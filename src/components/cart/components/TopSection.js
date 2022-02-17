import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const TopSection = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        marginHorizontal: 19,
      }}
    >
      <Image
        style={{ height: 150, width: 250, marginBottom: 10 }}
        source={require("../../../assets/images/invoices.png")}
      />
      {/* <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>Invoice No: </Text>
        <Text style={[styles.text, { color: "red" }]}>789979980</Text>
      </View> */}
      <Text
        style={{
          fontSize: 15,
          fontFamily: "ProximaNova",
          color: "gray",
          marginTop: 4,
          textAlign: "center",
          width: 260,
        }}
      >
        Items in your shopping cart will be saved in your computer for 30 days
      </Text>
    </View>
  );
};
export { TopSection };

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "ProximaNovaSemiBold",
  },
});
