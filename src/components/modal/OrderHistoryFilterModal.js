import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const OrderHistoryFilterModal = ({ refRBSheet }) => {
  const data = [
    { name: "Delievered" },
    { name: "In progress" },
    { name: "Cancelled" },
    { name: "Refunded" },
  ];
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={170}
        customStyles={{
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "ProximaNovaSemiBold", fontSize: 24 }}>
            SORT BY
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginHorizontal: 2,
              marginVertical: 12,
              flexWrap: "wrap",
            }}
          >
            {data?.map((item, i) => (
              <TouchableOpacity key={i} style={{ margin: 4 }}>
                <Text style={styles.border}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </RBSheet>
    </View>
  );
};
export default OrderHistoryFilterModal;

const styles = StyleSheet.create({
  border: {
    margin: 0,
    borderStyle: "dashed",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 22,
    padding: 6,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "gray",
    fontFamily: "ProximaNovaSemiBold",
  },
});
