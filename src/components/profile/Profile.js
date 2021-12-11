import React from "react";
import { TopImage } from "./components";
import { View } from "react-native";
import Header from "../header";
const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headingText="Profile" />
      <TopImage />
    </View>
  );
};

export default Profile;
