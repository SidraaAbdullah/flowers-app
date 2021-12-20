import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { CommonButton } from "../../buttons";
import { Icon } from "react-native-elements";
import { style } from "../../register/components/style";
import { TopImage } from ".";
import Header from "../../header";

const ChangePassword = () => {
  const [password, setPassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  return (
    <View>
      <Header screen="profile" headingText="Change Password" />
      <TopImage headingText="Change Password" />
      <View style={{ marginHorizontal: 35 }}>
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
        <View style={style.sectionStyle}>
          <Text style={style.imageStyle}>
            <Icon name="lock" size={20} color="gray" type="font-awesome" />
          </Text>
          <TextInput
            style={style.input}
            onChangeText={setconfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <CommonButton text="Save" screen="profile" />
        </View>
      </View>
    </View>
  );
};
export { ChangePassword };
