import React from "react";
import { Icon } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import { CommonButton } from "../buttons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const LocationSheet = ({ refRBSheet, location }) => {
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={230}
        customStyles={{
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <View style={{ flexGrow: 1, alignItems: "center" }}>
          <View style={{ width: "100%", borderRadius: 5, padding: 10 }}>
            <Text style={{ fontSize: 18, fontFamily: "ProximaNovaSemiBold" }}>
              Your Address
            </Text>
            <View style={{ marginTop: 10 }}>
              <View style={style.item}>
                <Icon
                  name="location-outline"
                  size={25}
                  color="black"
                  type="ionicon"
                />
                <Text style={style.text}>
                  {location.address || "Current location"}
                </Text>
              </View>
              <TouchableOpacity
                style={style.item}
                onPress={() =>
                  navigation.navigate("home", {
                    screen: "Account",
                    params: {
                      screen: "addAddress",
                    },
                  })
                }
              >
                <Icon name="add" size={25} color="black" type="ionicon" />
                <Text style={style.text}>Add an Address</Text>
              </TouchableOpacity>
            </View>
          </View>

          <CommonButton
            text="Cancel"
            rightIcon
            rightIconName="close"
            onPress={() => refRBSheet.current.close()}
            style={{ width: "72%" }}
          />
        </View>
      </RBSheet>
    </View>
  );
};
export default LocationSheet;
const style = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingVertical: 8,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    width: "100%",
  },
  text: {
    paddingLeft: 10,
    fontSize: 14,
    fontFamily: "ProximaNova",
    color: "black",
  },
});
