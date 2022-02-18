import React, { useRef, useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { OrderCancelSheet } from "../../bottom-sheet";
import { getOrderStatus } from "../../../hooks/socket-api";

const OrderCancel = ({ item, refreshData, openDialScreen, phone }) => {
  const [response, setResponse] = useState(item?.status);

  useEffect(() => {
    getOrderStatus(item, setResponse);
  }, []);

  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      {response != "CANCELLED" && (
        <TouchableOpacity
          onPress={() => refRBSheet.current.open()}
          style={[styles.call, { backgroundColor: "red", marginRight: 6 }]}
        >
          <Icon name="times" size={25} color="white" type="font-awesome" />
          <Text style={styles.text}>Order Cancel</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        disabled={phone ? false : true}
        onPress={openDialScreen}
        style={[
          styles.call,
          { backgroundColor: phone ? "#60dc6c" : "lightgray" },
        ]}
      >
        <Icon name="phone" color="white" type="font-awesome" />
        <Text style={styles.text}>Call</Text>
      </TouchableOpacity>
      <OrderCancelSheet
        refreshData={refreshData}
        item={item}
        refRBSheet={refRBSheet}
      />
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
