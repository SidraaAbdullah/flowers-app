import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

const BlackButton = ({ text, screen }) => {
  const navigation = useNavigation();
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

export { BlackButton };
