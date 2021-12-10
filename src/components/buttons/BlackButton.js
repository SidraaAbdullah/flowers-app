import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

const BlackButton = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        props.screen && navigation.navigate(props.screen);
      }}
      style={styles.button}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export { BlackButton };
