import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { CommonButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";
import RadioButton from "radio-buttons-react-native";
import { useQuery, useMutation } from "react-query";
import { UPDATE_PRIMARY_ADDRESS } from "../../../queries";

const AddAdress = ({ navigation }) => {
  const { data: savedAddresses, isLoading: addressesLoading } = useQuery(
    "/user/delivery-address"
  );
  const { mutate: updatePrimaryAddress } = useMutation(UPDATE_PRIMARY_ADDRESS);
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleUpdatePrimaryAdress = () => {
    updatePrimaryAddress(
      {
        delivery_address_id: selectedAddress?._id,
        primary: true,
      },
      {
        onError: (e) => {
          alert("Error");
        },
        onSuccess: () => {
          alert("Success");
        },
      }
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <Header screen="profile" headingText="Address Setting" />
      <TopImage headingText="Add Address" />
      <View style={{ marginHorizontal: 35 }}>
        <RadioButton
          animationType="pulse"
          box={false}
          initial={2}
          data={savedAddresses?.data || []}
          selectedBtn={(e) => setSelectedAddress(e)}
          style={{ marginBottom: 30 }}
          activeColor="#ffbd11"
          circleSize={15}
          boxStyle={{ marginBottom: 5 }}
        />
        <CommonButton
          bgColor="#ffbd11"
          color="black"
          text="Add new Address"
          onPress={() => navigation.navigate("newAddress")}
          rightIcon
          rightIconName="add-outline"
        />
        <CommonButton
          onPress={handleUpdatePrimaryAdress}
          text="Save as Primary"
          screen="profile"
        />
      </View>
    </ScrollView>
  );
};
export { AddAdress };
