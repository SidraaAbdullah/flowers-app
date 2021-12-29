import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const ArrowButton = ({ icon, text, screen, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={styles.border}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon name={icon} size={20} color="black" type="ionicon" />
        <Text style={styles.text}>{text}</Text>
      </View>
      <Icon name="arrow-forward" color="black" type="ionicon" />
    </TouchableOpacity>
  );
};
export { ArrowButton };

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    paddingLeft: 15,
    textAlign: "center",
    fontFamily: "ProximaNova",
  },
  border: {
    borderStyle: "dashed",
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#ebebeb",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "85%",
  },
});
