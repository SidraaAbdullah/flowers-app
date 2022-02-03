import React from "react";
import { View, ScrollView } from "react-native";
import { CommonButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";
import RadioButton from "radio-buttons-react-native";
import { useQuery } from "react-query";

const AddAdress = ({ navigation }) => {
  const { data: savedAddresses, isLoading: addressesLoading } = useQuery(
    "/user/delivery-address"
  );
  console.log({ savedAddresses });
  const data = [
    {
      label: "Address 1",
    },
    {
      label: "Address 2",
    },
  ];
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
          // selectedBtn={(e) => console.log(e.label)}
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
        <CommonButton text="Save as Primary" screen="profile" />
      </View>
    </ScrollView>
  );
};
export { AddAdress };
