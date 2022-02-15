import React, { useState } from "react";
import { View, Alert } from "react-native";
import { CommonButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";
import Input from "../../input";
import { CHANGE_PASSWORD } from "../../../queries";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "react-query";

const ChangePassword = () => {
  const navigation = useNavigation();
  const { mutate: changePassword } = useMutation(CHANGE_PASSWORD);
  const [password, setPassword] = useState(null);
  const [oldPassword, setOldPassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);

  const handleUpdatePassword = async () => {
    await changePassword(
      { password: oldPassword, newPassword: password },
      {
        onSuccess: () => {
          Alert.alert("Your password has been updated.", "", [
            {
              text: "OK",
              onPress: () => navigation.navigate("profile"),
            },
          ]);
        },
        onError: () => {
          Alert.alert("Failed to update your password.");
        },
      }
    );
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header screen="profile" headingText="Change Password" />
      <TopImage headingText="Change Password" />
      <View style={{ marginHorizontal: 35 }}>
        <Input
          label="Old Password"
          iconName="lock-closed"
          value={oldPassword}
          onChangeText={(e) => setOldPassword(e)}
          placeholder="Old Password"
          secureTextEntry={true}
        />
        <Input
          label="Password"
          iconName="lock-closed"
          value={password}
          onChangeText={(e) => setPassword(e)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Input
          label="Confirm Password"
          iconName="lock-closed"
          value={confirmPassword}
          onChangeText={(e) => setconfirmPassword(e)}
          placeholder="Confirm Password"
          secureTextEntry={true}
          error={
            confirmPassword && confirmPassword !== password
              ? "Password must match!"
              : ""
          }
        />
        <View style={{ marginTop: 10 }}>
          <CommonButton
            onPress={handleUpdatePassword}
            text="Save"
            screen="profile"
            isIcon
            bgColor={confirmPassword !== password ? "grey" : "#FF1843"}
            disabled={confirmPassword !== password}
          />
        </View>
      </View>
    </View>
  );
};
export { ChangePassword };
