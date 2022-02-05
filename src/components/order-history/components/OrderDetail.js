import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SingleOrderList } from ".";

const OrderDetail = ({ navigation }) => {
  return (
    <View style={{ marginBottom: 10, marginHorizontal: 25 }}>
      <View>
        <View style={{ paddingBottom: 10 }}>
          <Text style={styles.text}>Deliver to:</Text>
          <Text
            style={[styles.text, { color: "gray", fontFamily: "ProximaNova" }]}
          >
            R306 Sharifabd FB Area Block 1 Karachi
          </Text>
        </View>

        <View style={styles.orderDetail}>
          <Text style={styles.text}>Order details</Text>
          <View style={styles.container}>
            <View>
              <Text style={[styles.text, { color: "gray" }]}>6 items</Text>
            </View>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Text style={styles.text}>Subtotal: </Text>
              <Text style={[styles.text, { color: "red" }]}>60$</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <SingleOrderList navigation={navigation} />
        <SingleOrderList navigation={navigation} />
        <SingleOrderList navigation={navigation} />
      </View>
    </View>
  );
};
export { OrderDetail };

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: "ProximaNovaSemiBold",
    marginBottom: 3,
    color: "black",
  },
  orderDetail: {
    paddingTop: 10,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
  },
});
