import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SignIn, SignUp } from "./components";

const Register = ({ navigation }) => {
  const [value, setValue] = useState("signUp");
  const changeTo = (val) => {
    setValue(val);
  };
  const logIn = value === "logIn" ? 2 : 0;
  const signUp = value === "signUp" ? 2 : 0;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{ flex: 0.5, marginTop:10, justifyContent: 'center', alignItems: 'center' }}
      >

        {value === "logIn" ? (
          <Image style={{ height: 150, width: 250 }} source={require('../../assets/images/login.png')} />

        ) : value === "signUp" ? (
          <Image style={{ height: 150, width: 250 }} source={require('../../assets/images/signup.png')} />

        ) : null}


      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginVertical: 35,
          paddingHorizontal: 30,
        }}
      >
        <TouchableOpacity
          style={{
            width: "50%",
            alignItems: "center",
            borderBottomWidth: logIn,
          }}
          onPress={() => changeTo("logIn")}
        >
          <Text style={styles.text}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "50%",
            alignItems: "center",
            borderBottomWidth: signUp,
          }}
          onPress={() => changeTo("signUp")}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {value === "logIn" ? (
        <SignIn />
      ) : value === "signUp" ? (
        <SignUp navigation={navigation} />
      ) : null}
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "ProximaNovaBold",
  },
});
