import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { CommonButton } from "../../buttons";
import { Icon } from "react-native-elements";
import { style } from "./style";

const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  return (
    <View style={style?.container}>
      <View>
        <View style={style.sectionStyle}>
          <Text style={style.imageStyle}>
            <Icon name="phone" size={20} type="font-awesome" color="gray" />
          </Text>
          <TextInput
            style={style.input}
            onChangeText={setNumber}
            value={number}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
        </View>
        <View style={style?.sectionStyle}>
          <Text style={style.imageStyle}>
            <Icon name="envelope" size={18} color="gray" type="font-awesome" />
          </Text>
          <TextInput
            style={style.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
        <View style={style.sectionStyle}>
          <Text style={style.imageStyle}>
            <Icon name="lock" size={20} color="gray" type="font-awesome" />
          </Text>
          <TextInput
            style={style.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={style.sectionStyle}>
          <Text style={style.imageStyle}>
            <Icon color="gray" size={20} name="lock" type="font-awesome" />
          </Text>
          <TextInput
            style={style.input}
            onChangeText={setconfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <CommonButton screen="home" text="SIGN UP" />
        </View>
      </View>
    </View>
  );
};
export { SignUp };
