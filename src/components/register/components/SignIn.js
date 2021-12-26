import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CommonButton } from "../../buttons";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";
import Input from "../../input";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View>
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
        <View style={{ marginTop: 10 }}>
          <CommonButton text="LOG IN" screen="home" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("forgotPassword")}>
          <Text style={style.text}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export { SignIn };
