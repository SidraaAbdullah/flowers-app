import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { BlackButton } from "../../buttons";
import { Icon } from "react-native-elements";
import { style } from "../../register/components/style";
import { TopImage } from ".";
import Header from "../../header";
const AddAdress = () => {
  const [password, setPassword] = useState(null);
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
