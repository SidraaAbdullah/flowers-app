import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

const RoundButton = ({ text, screen }) => {
  const navigation = useNavigation();
  console.log(screen);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate(screen);
      }}
      style={styles.button}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export { RoundButton };
