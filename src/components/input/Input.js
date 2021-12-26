import React from "react";
import { Icon } from "react-native-elements";
import { View, TextInput, Text } from "react-native";
import { style } from "./style";

const Input = (props) => {
  const { label, iconName, setValue, placeholder, keyboardType, value } = props;
  return (
    <View>
      <Text style={{ marginLeft: 4 }}>{label}</Text>
      <View style={style.sectionStyle}>
        <Text style={style.imageStyle}>
          <Icon name={iconName} size={20} type="ionicon" color="gray" />
        </Text>
        <TextInput
          style={style.input}
          onChangeText={setValue}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};
export default Input;
