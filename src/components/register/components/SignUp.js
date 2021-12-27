import React, { useState } from "react";
import { View } from "react-native";
import { CommonButton } from "../../buttons";
import Input from "../../input";
import { style } from "./style";

const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  return (
    <View style={style?.container}>
      <View>
        <Input
          label="Phone Number"
          iconName="call"
          value={number}
          setValue={setNumber}
          keyboardType="numeric"
          placeholder="Phone Number"
        />
        <Input
          label="Email"
          iconName="mail"
          value={email}
          setValue={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Input
          label="Password"
          iconName="lock-closed"
          value={password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Input
          label="Confirm Password"
          iconName="lock-closed"
          value={confirmPassword}
          setValue={setconfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <View style={{ marginTop: 10 }}>
          <CommonButton screen="home" text="SIGN UP" />
        </View>
      </View>
    </View>
  );
};
export { SignUp };
