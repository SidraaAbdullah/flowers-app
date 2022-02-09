import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { CommonButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";
import { useQuery, useMutation } from "react-query";
import { UPDATE_PRIMARY_ADDRESS } from "../../../queries";
import RBSheet from "react-native-raw-bottom-sheet";
import Input from "../../input";
import { ADD_ADDRESS } from "../../../queries";
import RadioButton from "../../radio-button";

const AddAdress = () => {
  const refRBSheet = useRef();
  const { data: savedAddresses, refetch } = useQuery("/user/delivery-address");
  const { mutate: updatePrimaryAddress } = useMutation(UPDATE_PRIMARY_ADDRESS);
  const isPrimary = savedAddresses?.data?.find((item) => item.primary === true);
  const [check, setCheck] = useState(isPrimary._id);
  const { mutate: addAddress } = useMutation(ADD_ADDRESS);
  const [newAddress, setNewAddress] = useState("");
  const handleUpdatePrimaryAdress = () => {
    updatePrimaryAddress(
      {
        delivery_address_id: check,
        primary: true,
      },
      {
        onError: () => {
          alert("Error");
        },
        onSuccess: () => {
          alert("Success");
          refetch();
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
          refetch();
        },
      }
    );
  };

  const handleClick = (data) => {
    setCheck(data);
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header screen="profile" headingText="Address Setting" />
      <TopImage headingText="Add Address" />
      <ScrollView>
        <View style={{ marginHorizontal: 35, marginBottom: 20 }}>
          {savedAddresses?.data?.map((data) => (
            <RadioButton
              key={data?._id}
              check={check}
              handleClick={() => handleClick(data._id)}
              data={data}
            />
          ))}
          <View style={{ marginTop: 10 }}>
            <CommonButton
              onPress={handleUpdatePrimaryAdress}
              text="Save as Primary"
              screen="profile"
            />
            <CommonButton
              bgColor="#ffbd11"
              color="black"
              text="Add new Address"
              onPress={() => refRBSheet.current.open()}
              rightIcon
              rightIconName="add-outline"
            />
          </View>
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
