import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { CommonButton } from "../../buttons";
import { style } from "./style";
import Input from "../../input";

const ForgotPassword = () => {
  const [email, setEmail] = useState(null);
  return (
    <View style={style.container}>
      <View
        style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
      >
        <Image style={{height:130, width:250}} source={require('../../../assets/images/forgot.png')}/>
      </View>
      <Input
        label="Email"
        iconName="mail"
        value={email}
        setValue={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <View style={{ marginTop: 10 }}>
        <CommonButton
          text="Send Email"
          rightIcon
          rightIconName="send"
          rightIconSize={22}
        />
      </View>
    </View>
  );
};
export { ForgotPassword };
