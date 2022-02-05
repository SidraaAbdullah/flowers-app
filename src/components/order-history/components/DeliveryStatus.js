import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const DeliveryStatus = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 15 }}>
        <Icon name="phone" color="black" type="font-awesome" />
        <Text style={styles.text}>Accepted</Text>
      </View>
      <Icon name="arrow-right" color="#ffbd11" type="font-awesome" />
      <View style={{ marginHorizontal: 15 }}>
        <Icon name="truck" color="black" type="font-awesome" />
        <Text style={styles.text}>On the way</Text>
      </View>
      <Icon name="arrow-right" color="#ffbd11" type="font-awesome" />
      <View style={{ marginHorizontal: 15 }}>
        <Icon name="phone" color="black" type="font-awesome" />
        <Text style={styles.text}>Delivered</Text>
      </View>
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
