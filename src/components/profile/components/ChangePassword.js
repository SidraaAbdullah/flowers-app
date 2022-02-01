import React, { useState } from "react";
import { View } from "react-native";
import { CommonButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";
import Input from "../../input";

const ChangePassword = () => {
  const [password, setPassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header screen="profile" headingText="Change Password" />
      <TopImage headingText="Change Password" />
      <View style={{ marginHorizontal: 35 }}>
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
          <CommonButton text="Save" screen="profile" isIcon bgColor="#1c74bc" />
        </View>
      </View>
    </View>
  );
};
export { ChangePassword };
