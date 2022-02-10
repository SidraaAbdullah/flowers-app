import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { CommonButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";
import { useQuery, useMutation } from "react-query";
import { UPDATE_PRIMARY_ADDRESS } from "../../../queries";
import { ADD_ADDRESS } from "../../../queries";
import RadioButton from "../../radio-button";
import { showToast } from "../../../util/toast";
import { useNavigation } from "@react-navigation/native";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import useStorage from "../../../hooks/useStorage";

const AddAdress = () => {
  const navigation = useNavigation();
  const [location] = useStorage("ca_location", { isObject: true });
  const [check, setCheck] = useState({});
  const { data: savedAddresses, refetch } = useQuery("/user/delivery-address", {
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    onSuccess: (res) => {
      const isPrimary = res?.data?.find((item) => item?.primary === true);
      setCheck(isPrimary);
    },
  });
  navigation.addListener("focus", () => {
    refetch();
  });
  const { mutate: updatePrimaryAddress } = useMutation(UPDATE_PRIMARY_ADDRESS);

  const handleUpdatePrimaryAdress = () => {
    updatePrimaryAddress(
      {
        delivery_address_id: check._id,
        primary: true,
      },
      {
        onError: (err) => {
          showToast(err.toString(), "error");
        },
        onSuccess: async (res) => {
          showToast(res.message, "success");
          await AsyncStorageLib.setItem(
            "ca_location",
            JSON.stringify({ ...location, ...check })
          );
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopImage headingText="Add Address" />
        <View style={{ marginHorizontal: 35, marginBottom: 20 }}>
          {savedAddresses?.data?.map((data) => (
            <RadioButton
              key={data?._id}
              check={check?._id}
              handleClick={() => handleClick(data)}
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
              onPress={() => navigation.push("newAddressMap")}
              rightIcon
              rightIconName="add-outline"
            />
          </View>
        </View>
      </ScrollView>

      <View></View>
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
