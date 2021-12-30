import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../../header";
import { SingleOrderList } from ".";
import { DeliveryInfo } from "../../cart/components";

const SingleOrder = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="Single Order History" />
      <View style={{ marginVertical: 20, flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
            marginHorizontal: 19,
          }}
        >
          <Image style={{ height: 60, width: 60 }} />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>Invoice No: </Text>
            <Text style={[styles.text, { color: "red" }]}>789979980</Text>
          </View>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "ProximaNova",
              color: "gray",
              marginTop: 4,
              textAlign: "center",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <ScrollView>
          <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
            <View>
              <SingleOrderList />
              <SingleOrderList />
              <SingleOrderList />
            </View>
            <DeliveryInfo navigation={navigation} />
          </View>
        </ScrollView>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 10,
            marginHorizontal: 19,
          }}
        >
          <Text style={styles.text}>Total: </Text>
          <Text style={[styles.text, { color: "red" }]}>60$</Text>
        </View>
      </View>
    </View>
  );
};
export { SingleOrder };
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "ProximaNovaSemiBold",
  },
});
