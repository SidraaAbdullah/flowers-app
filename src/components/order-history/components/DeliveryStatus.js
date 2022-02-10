import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { getOrderStatus } from "../../../hooks/socket-api";

const DeliveryStatus = ({ item }) => {
  const [response, setResponse] = useState(item?.status);

  useEffect(() => {
    getOrderStatus(item, setResponse);
  }, []);

  let statuses = [
    { name: "phone", text: "Driver assigned", status: "DRIVER-ASSIGNED" },
    { name: "truck", text: "Item picked", status: "DRIVER-PICKED" },
    {
      name: "phone",
      text: "On the way",
      status: "IN-PROGRESS",
    },
    { name: "truck", text: "Delivered", status: "DELIVERED" },
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
            <View style={{ marginHorizontal: 8 }}>
              <Icon
                name={item.name}
                color={item.status === response ? "green" : "black"}
                type="font-awesome"
              />
              <Text
                style={[
                  styles.text,
                  {
                    color: item.status === response ? "green" : "black",
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
    paddingVertical: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
});
