import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Icon } from "react-native-elements";

const CommonButton = (props) => {
  const backgroundColor = props.bgColor ? props.bgColor : "#FF1843";
  const color = props.color ? props.color : "white";
  const padding = props.paddingVertical ? props.paddingVertical : 12;

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      disabled={props.disabled}
      onPress={props.onPress && props.onPress}
      style={[styles.button, { backgroundColor: backgroundColor }, props.style]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={[styles.text, { color: color, paddingVertical: padding }]}>
          {props.text}
        </Text>
        {props.isIcon && (
          <Icon
            size={props.iconSize || 18}
            name={props.iconName || "save-outline"}
            color={props.iconColor || "white"}
            type={props.iconType || "ionicon"}
          />
        )}
      </View>

      {props.rightIcon && (
        <View style={styles.rightIcon}>
          <Icon
            size={props.rightIconSize || 30}
            name={props.rightIconName || "arrow-forward-outline"}
            color={props.rightIconColor || "#FF1843"}
            type={props.rightIconType || "ionicon"}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export { CommonButton };
