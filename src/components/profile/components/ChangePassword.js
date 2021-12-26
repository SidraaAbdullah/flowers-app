import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { CommonButton } from "../../buttons";
import { Icon } from "react-native-elements";
import { style } from "../../register/components/style";
import { TopImage } from ".";
import Header from "../../header";
import Input from "../../input/index";

const ChangePassword = () => {
  const [password, setPassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  return (
    <View>
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
          setValue={setPassword}
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
