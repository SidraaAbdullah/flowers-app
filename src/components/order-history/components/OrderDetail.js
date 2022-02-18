import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SingleOrderList } from ".";
import { orderHistoryTotalPrice } from "../../../util/totalPrice";

const OrderDetail = ({ navigation, item }) => {
  console.log(item);
  return (
    <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
      <View>
        <View style={{ paddingBottom: 10 }}>
          <Text style={styles.text}>Deliver to:</Text>
          <Text
            style={[styles.text, { color: "gray", fontFamily: "ProximaNova" }]}
          >
            {item?.deliveryAddress?.address}
          </Text>
        </View>

        <View style={styles.orderDetail}>
          <Text style={styles.text}>Order details</Text>
          <View style={styles.container}>
            <View>
              <Text style={[styles.text, { color: "gray" }]}>
                {item?.products?.length} item(s)
              </Text>
            </View>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Text style={styles.text}>Subtotal: </Text>
              <Text style={[styles.text, { color: "red" }]}>
                Rs: {orderHistoryTotalPrice(item)}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        {item?.products?.map((item, i) => (
          <SingleOrderList
            quantity={item?.quantity}
            item={item?.product_id}
            key={i}
            navigation={navigation}
          />
        ))}
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
