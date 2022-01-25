import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const Count = () => {
  const [number, setNumber] = useState(1);
  const increment = () => setNumber(number + 1);
  let decrement = () => setNumber(number - 1);
  if (number <= 1) {
    decrement = () => setNumber(1);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => decrement()}>
        <Icon name="minus" size={18} color="gray" type="font-awesome" />
      </TouchableOpacity>
      <Text style={styles.text}>{number}</Text>
      <TouchableOpacity onPress={() => increment()}>
        <Icon name="plus" color="gray" size={18} type="font-awesome" />
      </TouchableOpacity>
    </View>
  );
};

export { Count };
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    marginHorizontal: 8,
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "gray",
    paddingHorizontal: 7,
    color: "black",
    backgroundColor: "#f1f1f1",
    fontFamily: "ProximaNovaSemiBold",
  },
});
