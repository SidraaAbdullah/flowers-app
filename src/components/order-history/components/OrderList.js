import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { getOrderStatus } from "../../../hooks/socket-api";
import { orderHistoryTotalPrice } from "../../../util/totalPrice";
let moment = require("moment");

const OrderList = ({ status, navigation, item, refreshData }) => {
  const [response, setResponse] = useState(status);
  useEffect(() => {
    getOrderStatus(item, setResponse);
  }, []);

  return (
    <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
      {response === "DELIVERED" && !item?.driver_rating && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("reviewScreen", { item, refreshData })
          }
        >
          <Text
            style={{
              color: "red",
              fontFamily: "ProximaNovaSemiBold",
              textAlign: "right",
              marginVertical: 6,
            }}
          >
            Review
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={async () => {
          navigation.navigate("singleOrderHistory", {
            item,
            refreshData,
          });
        }}
      >
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
              <Image
                style={{ width: 80, height: 80, resizeMode: "contain" }}
                source={{
                  uri:
                    item?.products[0]?.product_id?.image ||
                    "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
                }}
              />
            </View>
            <View style={{ width: "70%" }}>
              <View style={[styles.container, { marginBottom: 3 }]}>
                <Text style={styles.font}>
                  Products ({item?.products?.length})
                </Text>
                <Text style={styles.font}>
                  Rs {item?.products?.length && orderHistoryTotalPrice(item)}
                </Text>
              </View>
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "ProximaNova",
                  fontSize: 14,
                  color: "gray",
                }}
              >
                {item?.deliveryAddress?.address}
              </Text>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: 3,
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{
                    fontFamily: "ProximaNova",
                    color: "gray",
                    marginRight: 3,
                  }}
                >
                  Invoice No:
                </Text>
                <Text style={{ fontFamily: "ProximaNova", color: "red" }}>
                  {item?.uid}
                </Text>
              </View>
              <View style={styles.container}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Icon name="calendar-outline" size={18} type="ionicon" />
                  <Text
                    style={{
                      fontFamily: "ProximaNova",
                      marginLeft: 5,
                      marginTop: 2,
                    }}
                  >
                    {moment(item?.createdAt).format("DD-MMM-YYYY")}
                  </Text>
                </View>

                <Text
                  style={{
                    fontFamily: "ProximaNovaBold",
                    marginTop: 2,
                    color: "green",
                    fontSize: 16,
                  }}
                >
                  {response}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export { OrderList };
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
  font: {
    fontSize: 16,
    fontFamily: "ProximaNovaSemiBold",
  },
  border: {
    borderWidth: 1,
    justifyContent: "center",
    borderStyle: "dashed",
    borderRadius: 8,
    borderColor: "lightgray",
    backgroundColor: "#FFFFFF",
  },
});
