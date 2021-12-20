import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { CommonButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";
import { Icon } from "react-native-elements";
import { style } from "../../register/components/style";
import RadioButton from "radio-buttons-react-native";

const NewAddress = () => {
  const [newAddress, setNewAddress] = useState(null);
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
      <Header screen="addAddress" headingText="New Address" />
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
        <View style={style.sectionStyle}>
          <Text style={style.imageStyle}>
            <Icon name="book" size={20} color="gray" type="ionicon" />
          </Text>
          <TextInput
            style={style.input}
            onChangeText={setNewAddress}
            value={newAddress}
            placeholder="Add a new delivery address"
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <CommonButton
            bgColor="#ffbd11"
            color="black"
            text="Save new Address"
            screen="addAddress"
            isIcon
            iconName="close-outline"
            iconColor="red"
          />
        </View>
      </View>
    </View>
  );
};
export { NewAddress };
