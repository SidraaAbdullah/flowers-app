import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { RoundButton } from "../../buttons";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View>
        <View style={style.sectionStyle}>
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
        <View style={{ marginTop: 10 }}>
          <RoundButton text="LOG IN" screen="home" />
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
    borderStyle: "dotted",
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
