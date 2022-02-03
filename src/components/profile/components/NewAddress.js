import React, { useState } from "react";
import { View } from "react-native";
import { CommonButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";
import Input from "../../input";
import RadioButton from "radio-buttons-react-native";
import { useMutation } from "react-query";
import { ADD_ADDRESS, GET_ADDRESS } from "../../../queries";
import { useQuery } from "react-query";

const NewAddress = () => {
  const { data, isLoading: addressesLoading } = useQuery("/user/delivery-address");
  console.log({ data });
  const { mutate: addAddress } = useMutation(ADD_ADDRESS);
  const [newAddress, setNewAddress] = useState('');
  const handleAddAdress = () => {
    addAddress({
      address: newAddress
    }, {
      onError: (e) => {
        alert('Error');
      },
      onSuccess: () => {
        alert("Success");
        setNewAddress('')
      }
    })
  }
  const dataA = [
    {
      label: "Address 1",
    },
    {
      label: "Address 2",
    },
  ];
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header screen="addAddress" headingText="New Address" />
      <TopImage headingText="Add Address" />
      <View style={{ marginHorizontal: 35 }}>
        <RadioButton
          animationType="pulse"
          box={false}
          initial={2}
          data={dataA}
          selectedBtn={(e) => console.log(e.label)}
          style={{ marginBottom: 30 }}
          activeColor="#ffbd11"
          circleSize={15}
          boxStyle={{ marginBottom: 5 }}
        />
        <Input
          iconName="book"
          setValue={setNewAddress}
          value={newAddress}
          onChangeText={(e) => setNewAddress(e)}
          placeholder="Add a new delivery address"
          label="Address"
        />

        <View style={{ marginTop: 10 }}>
          <CommonButton
            bgColor="#ffbd11"
            color="black"
            text="Save new Address"
            screen="addAddress"
            rightIcon
            rightIconName="close-outline"
            rightIconColor="red"
            onPress={handleAddAdress}
          />
        </View>
      </View>
    </View>
  );
};
export { NewAddress };
