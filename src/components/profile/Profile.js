import React from "react";
import { TopImage, ArrowButton } from "./components";
import { View } from "react-native";
import Header from "../header";

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Header headingText="Profile" />
      <TopImage headingText="Profile Information" />
      <ArrowButton
        navigation={navigation}
        text="Add Address"
        icon="book-outline"
        screen="addAddress"
      />
      <ArrowButton
        navigation={navigation}
        text="Personal Information"
        icon="person-outline"
        screen="personalInfo"
      />
      <ArrowButton
        navigation={navigation}
        text="Change Password"
        icon="lock-closed-outline"
        screen="changePassword"
      />
    </View>
  );
};

export default Profile;
