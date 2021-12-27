import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const ArrowButton = ({ icon, text, screen, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={{
        borderStyle: "dashed",
        borderColor: "lightgray",
        borderWidth: 1,
        backgroundColor: "#ebebeb",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "85%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Icon name="book-outline" size={20} color="black" type="ionicon" />
        <Text
          style={{
            fontSize: 14,
            paddingLeft: 15,
            textAlign: "center",
          }}
        >
          {text}
        </Text>
      </View>
      <Icon name="arrow-forward" color="black" type="ionicon" />
    </TouchableOpacity>
  );
};
export { ArrowButton };

const style = StyleSheet.create({
  text: {
    fontSize: 22,
    marginVertical: 5,
  },
});
