import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const CommonButton = (props) => {
  const navigation = useNavigation();
  const backgroundColor = props.bgColor ? props.bgColor : "black";
  const color = props.color ? props.color : "white";
  const padding = props.paddingVertical ? props.paddingVertical : 12;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        props.screen && navigation.navigate(props.screen);
      }}
      style={[styles.button, { backgroundColor: backgroundColor }]}
    >
      <Text
        style={[
          styles.text,
          { color: color, paddingVertical: padding },
        ]}
      >
        {props.text}
      </Text>
      {props.isIcon && (
        <View
          style={{
            position: "absolute",
            backgroundColor: "white",
            right: 0,
            bottom: 0,
            height: 43,
            width: 43,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
            borderColor: "white",
          }}
        >
          <Icon
            size={props.iconSize || 30}
            name={props.iconName || "arrow-forward-outline"}
            color={props.iconColor || "black"}
            type={props.iconType || "ionicon"}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export { CommonButton };
