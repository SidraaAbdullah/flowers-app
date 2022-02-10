import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const DeliveryInfo = ({ navigation }) => {
  return (
    <View style={{ marginVertical: 10, paddingHorizontal: 5 }}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.heading}>Deliver To:</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 3,
          marginBottom: 10,
        }}
      >
        <Text style={styles.text}>R306 Sharifabd FB Area Block 1 Karachi</Text>
      </View>
      {/* <View style={{ marginTop: 10 }}>
        <Text style={styles.heading}>Deliver date and time:</Text>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              alignItems: "center",
            }}
          >
            <Icon
              name="calendar-outline"
              type="ionicon"
              size={18}
              color="gray"
            />
            <Text style={[styles.text, { marginLeft: 3 }]}>Today</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="time-outline" type="ionicon" size={18} color="gray" />
            <Text style={[styles.text, { marginLeft: 3, marginRight: 15 }]}>
              30 min
            </Text>
          </View>
          <Icon name="pencil" type="font-awesome" size={18} color="gray" />
        </View>
      </View> */}
    </View>
  );
};
export { DeliveryInfo };

const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    fontFamily: "ProximaNovaSemiBold",
    marginBottom: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: "ProximaNova",
    color: "gray",
    marginRight: 8,
  },
});
