import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { BlackButton } from "../../buttons";
import { Icon } from "react-native-elements";

const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View style={style?.container}>
      <View>
        <View style={style.sectionStyle}>
          <Text style={style.imageStyle}>
            <Icon name="phone" type="font-awesome" color="gray" />
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
            <Icon name="envelope" size={20} color="gray" type="font-awesome" />
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
            <Icon name="lock" color="gray" type="font-awesome" />
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
            <Icon color="gray" name="lock" type="font-awesome" />
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 35,
  },
  input: {
    height: 40,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 60,
    padding: 10,
    paddingLeft: 35,
    width: "100%",
    borderStyle: "dashed",
    borderColor: "gray",
  },
  sectionStyle: {
    position: "relative",
  },
  imageStyle: {
    position: "absolute",
    top: 16,
    left: 10,
    textAlign: "center",
  },
});
