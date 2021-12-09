import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SignIn, SignUp } from "./components";

const Register = () => {
  const [value, setValue] = useState("signUp");
  const changeTo = (val) => {
    setValue(val);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 0.3, alignItems: "center", justifyContent: "center" }}
      >
        <Text>Image</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 35,
        }}
      >
        <TouchableOpacity onPress={() => changeTo("logIn")}>
          <Text style={styles.text}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeTo("signUp")}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
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
