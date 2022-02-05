import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
const OrderCancelSheet = ({ refRBSheet }) => {
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={150}
        customStyles={{
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <View
          style={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={[styles.text, { color: "black", fontSize: 17 }]}>
            Are you sure you want to cancel this order?{" "}
          </Text>

          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => refRBSheet.current.close()}
              style={[styles.call, { backgroundColor: "red", marginRight: 6 }]}
            >
              <Text style={styles.text}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.call}>
              <Text style={styles.text}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};
export { OrderCancelSheet };
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: "ProximaNovaSemiBold",
    color: "white",
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
    marginTop: 20,
    marginBottom: 10,
  },
});
