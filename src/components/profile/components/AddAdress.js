import React from "react";
import { View } from "react-native";
import { BlackButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";

const AddAdress = () => {
  return (
    <View>
      <Header screen="profile" headingText="Add Address" />
      <TopImage headingText="Add Address" />
      <View style={{ marginHorizontal: 35 }}>
        <BlackButton
          bgColor="#ffbd11"
          color="black"
          text="Add new Address"
          screen="profile"
        />
        <BlackButton text="Save as Primary" screen="profile" />
      </View>
    </View>
  );
};
export { AddAdress };
