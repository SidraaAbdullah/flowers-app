import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import socketIOClient from "socket.io-client";
import { URL } from "../../../constants";

const DeliveryStatus = ({ item }) => {
  const [response, setResponse] = useState(item.status);
  useEffect(() => {
    const socket = socketIOClient(URL);
    socket.on(`${item._id}_statusUpdate`, (data) => {
      setResponse(data);
    });
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);

  let statuses = [
    { name: "phone", text: "Accepted", status: "DRIVER-ASSIGNED" },
    { name: "truck", text: "Accepted", status: "DRIVER-ASSIGNED" },
    {
      name: "phone",
      text: "On the way",
      status: "IN-PROGRESS",
    },
    { name: "truck", text: "Delivered", status: "DRIVER-ASSIGNED" },
  ];
  return (
    <View style={styles.container}>
      {statuses.map((item) => (
        <View style={{ marginHorizontal: 15 }}>
          <Icon
            name={item.name}
            color={item.status === response ? "green" : "black"}
            type="font-awesome"
          />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
};
export { DeliveryStatus };
const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 14,
    fontFamily: "ProximaNova",
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
