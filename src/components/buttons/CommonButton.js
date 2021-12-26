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
            size={props.iconSize || 20}
            name={props.iconName || "save-outline"}
            color={props.iconColor || "white"}
            type={props.iconType || "ionicon"}
          />
        )}
      </View>

      {props.rightIcon && (
        <View
          style={styles.rightIcon}
        >
          <Icon
            size={props.rightIconSize || 30}
            name={props.rightIconName || "arrow-forward-outline"}
            color={props.rightIconColor || "black"}
            type={props.rightIconType || "ionicon"}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export { CommonButton };
