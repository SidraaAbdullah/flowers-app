import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { CommonButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";
import Input from "../../input";
import { useMutation } from "react-query";
import { UPDATE_USER_PROFILE } from "../../../queries";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { addUser } from "../../../redux/actions/User";
import { useDispatch } from "react-redux";

const PersonalInformation = () => {
  const { user } = useSelector((state) => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { mutate: updateUser } = useMutation(UPDATE_USER_PROFILE);
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);
  const [number, setNumber] = useState(user?.phone_number);

  const handleUpdateUser = async () => {
    if (user) {
      dispatch(addUser({ name, email, phone_number: number }));
      console.log(user);
      await updateUser(
        { name, email, phone_number: number },
        {
          onSuccess: () => {
            Alert.alert("User profile has been updated.", "", [
              {
                text: "OK",
                onPress: () => navigation.navigate("profile"),
              },
            ]);
          },
          onError: () => {
            Alert.alert("Failed to update user profile.");
          },
        }
      );
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header screen="profile" headingText="Personal Information" />
      <TopImage headingText="Sidra Abdullah" personalInfo />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 35, marginBottom: 20 }}>
          <Input
            label="Phone Number"
            iconName="call"
            value={number}
            onChangeText={(e) => setNumber(e)}
            keyboardType="numeric"
            placeholder="Phone Number"
          />
          <Input
            label="Name"
            iconName="person"
            value={name}
            onChangeText={(e) => setName(e)}
            placeholder="Name"
          />
          <Input
            label="Email"
            iconName="mail"
            value={email}
            onChangeText={(e) => setEmail(e)}
            placeholder="Email"
            keyboardType="email-address"
          />
          {/* <Input
            label="Country"
            iconName="location"
            value={country}
            setValue={setCountry}
            placeholder="Country"
          />
          <Input
            label="City"
            iconName="location"
            value={city}
            setValue={setCity}
            placeholder="City"
          />
          <Input
            label="Town"
            iconName="location"
            value={town}
            setValue={setTown}
            placeholder="Town"
          />
          <Input
            label="House Number"
            iconName="location"
            value={houseNo}
            setValue={setHouseNo}
            placeholder="House Number"
          /> */}
          <View style={{ marginTop: 10 }}>
            <CommonButton
              text="Save"
              screen="profile"
              isIcon
              // bgColor="#1c74bc"
              onPress={() => handleUpdateUser()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export { PersonalInformation };
