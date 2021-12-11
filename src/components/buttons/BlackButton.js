import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

const BlackButton = (props) => {
  const navigation = useNavigation();
  const backgroundColor = props.bgColor ? props.bgColor : "black";
  const color = props.color ? props.color : "white";
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        props.screen && navigation.navigate(props.screen);
      }}
      style={[styles.button, { backgroundColor: backgroundColor }]}
    >
      <Text style={[styles.text,{color: color}]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export { BlackButton };
