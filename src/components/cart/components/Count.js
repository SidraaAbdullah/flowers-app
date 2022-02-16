import React from "react";
import { Icon } from "react-native-elements";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { IncreaseCart, DecreaseCart } from "../../../redux/actions/Cart";

const Count = ({ item }) => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(IncreaseCart(item));
  };
  let decrement = () => {
    dispatch(DecreaseCart(item));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={item?.quantity <= 1 ? true : false}
        onPress={() => decrement()}
      >
        <Icon
          name="minus"
          size={18}
          color={item?.quantity <= 1 ? "lightgray" : "gray"}
          type="font-awesome"
        />
      </TouchableOpacity>
      <Text style={styles.text}>{item?.quantity}</Text>
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
    borderColor: "lightgray",
    paddingHorizontal: 7,
    color: "black",
    backgroundColor: "#f1f1f1",
    fontFamily: "ProximaNovaSemiBold",
  },
});
