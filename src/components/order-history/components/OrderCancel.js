import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { OrderCancelSheet } from "../../bottom-sheet";

const OrderCancel = () => {
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => refRBSheet.current.open()}
        style={[styles.call, { backgroundColor: "red", marginRight: 6 }]}
      >
        <Icon name="times" size={25} color="white" type="font-awesome" />
        <Text style={styles.text}>Order Cancel</Text>
      </TouchableOpacity>
      <View style={styles.call}>
        <Icon name="phone" color="white" type="font-awesome" />
        <Text style={styles.text}>Call</Text>
      </View>
      <OrderCancelSheet refRBSheet={refRBSheet} />
    </View>
  );
};
export { OrderCancel };
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: "ProximaNovaSemiBold",
    color: "white",
    marginLeft: 8,
  },
  call: {
    paddingVertical: 10,
    width: "43%",
    backgroundColor: "#60dc6c",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
