import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { getOrderStatus } from "../../../hooks/socket-api";
import LottieView from "lottie-react-native";

const DeliveryStatus = ({ item }) => {
  const [response, setResponse] = useState(item?.status);

  useEffect(() => {
    getOrderStatus(item, setResponse);
  }, []);

  let statuses = [
    {
      lottie: require("../../../assets/lottie/87985-delivery-scooter.json"),
      text: "In progress",
      status: "IN-PROGRESS",
    },
    {
      lottie: require("../../../assets/lottie/17431-package-delivery.json"),
      text: "Driver assigned",
      status: "DRIVER-ASSIGNED",
    },
    {
      lottie: require("../../../assets/lottie/23212-order-packed.json"),
      text: "Item picked",
      status: "DRIVER-PICKED",
    },
    {
      lottie: require("../../../assets/lottie/95591-delivered.json"),
      text: "Delivered",
      status: "DELIVERED",
    },
  ];
  return (
    <View style={styles.container}>
      {response === "CANCELLED" ? (
        <Text
          style={{ color: "red", fontFamily: "ProximaNovaBold", fontSize: 18 }}
        >
          ORDER CANCELLED
        </Text>
      ) : (
        <>
          {statuses.map((item) => (
            <View
              style={{
                marginHorizontal: 0,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              {/* <Icon
                name={item.name}
                color={item.status === response ? "#FF1843" : "#FF7E95"}
                type="font-awesome"
              /> */}
              <LottieView
                style={{ width: 120, height: 90 }}
                source={item.lottie}
                autoPlay
                loop={item.status === response ? true : false}
                speed={1}
                // colorFilters={'red'}
              />
              <Text
                style={[
                  styles.text,
                  {
                    color: item.status === response ? "#FF1843" : "#FF7E95",
                    fontFamily:
                      item.status === response
                        ? "ProximaNovaBold"
                        : "ProximaNova",
                  },
                ]}
              >
                {item.text}
              </Text>
            </View>
          ))}
        </>
      )}
    </View>
  );
};
export { DeliveryStatus };
const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 14,
    marginTop: 5,
    width: 70,
    textAlign: "center",
    lineHeight: 15,
  },
  container: {
    paddingVertical: 1,
    marginBottom: 15,
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent:'flex-start',
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
});
