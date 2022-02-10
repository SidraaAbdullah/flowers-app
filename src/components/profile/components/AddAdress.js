import React, { useState, useRef } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { CommonButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";
import RadioButton from "radio-buttons-react-native";
import { useQuery, useMutation } from "react-query";
import { UPDATE_PRIMARY_ADDRESS } from "../../../queries";
import RBSheet from "react-native-raw-bottom-sheet";
import Input from "../../input";
import { ADD_ADDRESS } from "../../../queries";

const AddAdress = ({ navigation }) => {
  const refRBSheet = useRef();
  const { data: savedAddresses, isLoading: addressesLoading } = useQuery(
    "/user/delivery-address"
  );
  const { mutate: updatePrimaryAddress } = useMutation(UPDATE_PRIMARY_ADDRESS);
  const [selectedAddress, setSelectedAddress] = useState("");
  const { mutate: addAddress } = useMutation(ADD_ADDRESS);
  const [newAddress, setNewAddress] = useState("");

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

  const handleAddAdress = () => {
    addAddress(
      {
        address: newAddress,
      },
      {
        onError: (e) => {
          alert("Error");
        },
        onSuccess: () => {
          alert("Success");
          setNewAddress("");
        },
      }
    );
  };
  //FOR PRIMARY ADDRESS RADIO BUTTON POSITION
  const index = parseInt(
    savedAddresses?.data
      .map((val, index) => val.primary === true && index)
      .filter((val) => val != false)
      .toString()
  );
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header screen="profile" headingText="Address Setting" />
      <TopImage headingText="Add Address" />
      <ScrollView>
        <View style={{ marginHorizontal: 35, marginBottom: 20 }}>
          {/* <RadioButton
            animationType="pulse"
            box={false}
            initial={index + 1}
            data={savedAddresses?.data || []}
            selectedBtn={(e) => setSelectedAddress(e)}
            style={{ marginBottom: 30 }}
            activeColor="#ffbd11"
            circleSize={15}
            boxStyle={{ marginBottom: 5 }} 
            />
            
            */}
          <CommonButton
            bgColor="#ffbd11"
            color="black"
            text="Add new Address"
            // onPress={() => navigation.navigate("newAddress")}
            onPress={() => navigation.push("newAddressMap")}
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

      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={230}
          customStyles={{
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <View style={{ flexGrow: 1, alignItems: "center" }}>
            <View style={{ width: "100%", borderRadius: 5, padding: 10 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontFamily: "ProximaNovaSemiBold",
                }}
              >
                Select Delivery Address
              </Text>
            </View>
            <View style={{ width: "90%" }}>
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
        </RBSheet>
      </View>
    </View>
  );
};
export { AddAdress };

const style = StyleSheet.create({
  searchBar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingVertical: 8,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    width: "100%",
  },
  text: {
    paddingLeft: 10,
    fontSize: 17,
    fontFamily: "ProximaNovaSemiBold",
    color: "black",
  },
});
