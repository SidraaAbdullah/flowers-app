import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { CommonButton } from "../../buttons";
import { TopImage } from ".";
import Header from "../../header";
import Input from "../../input/index";

const PersonalInformation = () => {
  const [email, setEmail] = useState("sidraabdullah56@gmail.com");
  const [name, setName] = useState("Sidra Abdullah");
  const [number, setNumber] = useState("090078601");
  const [city, setCity] = useState("Karachi");
  const [country, setCountry] = useState("Pakistan");
  const [houseNo, setHouseNo] = useState("D/84/B");
  const [town, setTown] = useState("Gulshan");
  return (
    <View style={{ flex: 1, backgroundColor:'white' }}>
      <Header screen="profile" headingText="Personal Information" />
      <TopImage headingText="Sidra Abdullah" personalInfo />
      <ScrollView>
        <View style={{ marginHorizontal: 35, marginBottom: 30 }}>
          <Input
            label="Phone Number"
            iconName="call"
            value={number}
            setValue={setNumber}
            keyboardType="numeric"
            placeholder="Phone Number"
          />
          <Input
            label="Name"
            iconName="person"
            value={name}
            setValue={setName}
            placeholder="Name"
          />
          <Input
            label="Email"
            iconName="mail"
            value={email}
            setValue={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <Input
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
          />
          <View style={{ marginTop: 10 }}>
            <CommonButton text="Save" screen="profile" isIcon bgColor="#1c74bc" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export { PersonalInformation };
