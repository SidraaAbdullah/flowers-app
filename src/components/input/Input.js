import React from "react";
import { Icon } from "react-native-elements";
import { View, TextInput, Text } from "react-native";
import { style } from "./style";
const Input = (props) => {
  const { label, iconName, error, touched, ...otherProps } = props;
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={style.label}>{label}</Text>
        {touched && error ? (
          <Text
            style={{
              color: "red",
              fontFamily: "ProximaNova",
              paddingBottom: 2,
            }}
          >
            {error}
          </Text>
        ) : null}
        {/* {props?.error && !error ? (
          <Text
            style={{
              color: "red",
              fontFamily: "ProximaNova",
              paddingBottom: 2,
            }}
          >
            {props?.error}
          </Text>
        ) : null} */}
      </View>
      <View style={style.sectionStyle}>
        <Text style={style.imageStyle}>
          <Icon name={iconName} size={20} type="ionicon" color="gray" />
        </Text>
        <TextInput style={style.input} {...otherProps} />
      </View>
    </View>
  );
};
export default Input;
