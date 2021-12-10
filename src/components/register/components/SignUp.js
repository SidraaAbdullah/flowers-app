import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { BlackButton } from "../../buttons";
import { Icon } from "react-native-elements";
import { style } from "./style";

const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState(null);
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
          />
        </View>
        <View style={style.sectionStyle}>
          <Text style={style.imageStyle}>
            <Icon color="gray" size={20} name="lock" type="font-awesome" />
          </Text>
          <TextInput style={style.input} placeholder="Confirm Pasword" />
        </View>
        <View style={{ marginTop: 10 }}>
          <BlackButton screen="home" text="SIGN UP" />
        </View>
      </View>
    </View>
  );
};
export { SignUp };
