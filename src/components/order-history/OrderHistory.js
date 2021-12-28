import React, { useRef } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import Header from "../header";
import { OrderList } from "./components";
import { CommonButton } from "../buttons";
import OrderHistoryFilterModal from "../modal/OrderHistoryFilterModal";

const OrderHistory = () => {
  const refRBSheet = useRef();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="Order History" />
      <View style={{ flex: 1, paddingTop: 10 }}>
        <View
          style={[styles.container, { marginBottom: 5, paddingHorizontal: 15 }]}
        >
          <Text style={{ fontSize: 18, fontFamily: "ProximaNovaSemiBold" }}>
            My Orders
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => refRBSheet.current.open()}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "ProximaNovaSemiBold",
                marginRight: 3,
              }}
            >
              Filter:
            </Text>
            <Icon name="options" type="ionicon" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ padding: 15 }}>
            <OrderList status="Delivered" />
            <OrderList status="In Progress" />
            <OrderList status="Cancelled" />
            <OrderList status="Delivered" />
            <OrderList status="In Progress" />
            <OrderList status="Refunded" />
            <OrderList status="Delivered" />
            <OrderList status="Refunded" />
            <OrderList status="Cancelled" />
            <OrderList status="Delivered" />
            <OrderList status="In Progress" />
            <View style={{ marginVertical: 5 }}>
              <CommonButton text="Load More" />
            </View>
          </View>
        </ScrollView>
      </View>
      <OrderHistoryFilterModal refRBSheet={refRBSheet} />
    </View>
  );
};
export default OrderHistory;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    paddingLeft: 15,
    textAlign: "center",
    fontFamily: "ProximaNova",
  },
});
