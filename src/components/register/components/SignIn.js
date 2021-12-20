import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { CommonButton } from "../../buttons";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View>
        <View style={style.sectionStyle}>
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
        <View style={{ marginTop: 10 }}>
          <CommonButton text="LOG IN" screen="home" />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("forgotPassword")}>
          <Text style={{ color: "gray", textAlign: "center" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export { SignIn };
