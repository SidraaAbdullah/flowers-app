import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SignIn, SignUp } from "./components";

const Register = () => {
  const [value, setValue] = useState("signUp");
  const changeTo = (val) => {
    setValue(val);
  };
  const logIn = value === "logIn" ? 2 : 0;
  const signUp = value === "signUp" ? 2 : 0;
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
      >
        <Text>Image</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginVertical: 35,
        }}
      >
        <View
          style={{
            width: "50%",
            alignItems: "center",
            borderBottomWidth: logIn,
          }}
        >
          <TouchableOpacity onPress={() => changeTo("logIn")}>
            <Text style={styles.text}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "50%",
            alignItems: "center",
            borderBottomWidth: signUp,
          }}
        >
          <TouchableOpacity onPress={() => changeTo("signUp")}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      {value === "logIn" ? <SignIn /> : value === "signUp" ? <SignUp /> : null}
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
