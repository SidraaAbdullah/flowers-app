import React from "react";
import { View } from "react-native";
import { CommonButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";
import RadioButton from "radio-buttons-react-native";

const AddAdress = () => {
  const data = [
    {
      label: "Address 1",
    },
    {
      label: "Address 2",
    },
  ];
  return (
    <View>
      <Header screen="profile" headingText="Address Setting" />
      <TopImage headingText="Add Address" />
      <View style={{ marginHorizontal: 35 }}>
        <RadioButton
          animationType="pulse"
          box={false}
          initial={2}
          data={data}
          selectedBtn={(e) => console.log(e.label)}
          style={{ marginBottom: 30 }}
          activeColor="#ffbd11"
          circleSize={15}
          boxStyle={{ marginBottom: 5 }}
        />
        <CommonButton
          bgColor="#ffbd11"
          color="black"
          text="Add new Address"
          screen="newAddress"
          rightIcon
          rightIconName="add-outline"
        />
        <CommonButton text="Save as Primary" screen="profile" />
      </View>
    </View>
  );
};
export { AddAdress };
