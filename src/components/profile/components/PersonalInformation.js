import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { BlackButton } from "../../buttons";
import { Icon } from "react-native-elements";
import { style } from "../../register/components/style";
import { TopImage } from ".";
import Header from "../../header";

const PersonalInformation = () => {
  const [email, setEmail] = useState("sidraabdullah56@gmail.com");
  const [name, setName] = useState("Sidra Abdullah");
  const [number, setNumber] = useState("0900-78601");
  const [id, setId] = useState("1");
  return (
    <View>
      <Header screen="profile" headingText="Personal Information" />
      <TopImage headingText="Sidra Abdullah" personalInfo />
      <View style={{ marginHorizontal: 35 }}>
        <View style={style.sectionStyle}>
          <Text style={style.imageStyle}>
            <Icon name="phone" size={20} type="font-awesome" color="gray" />
          </Text>
          <TextInput
            style={style.input}
            onChangeText={setNumber}
            value={number}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
        </View>
        <View style={style.sectionStyle}>
          <Text style={style.imageStyle}>
            <Icon name="person" size={17} type="ionicon" color="gray" />
          </Text>
          <TextInput
            style={style.input}
            onChangeText={setName}
            value={name}
            placeholder="Name"
          />
        </View>
        <View style={style?.sectionStyle}>
          <Text style={style.imageStyle}>
            <Icon name="envelope" size={18} color="gray" type="font-awesome" />
          </Text>
          <TextInput
            style={style.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
        </View>
        <View style={style?.sectionStyle}>
          <Text style={style.imageStyle}>
            <Icon name="albums" size={18} color="gray" type="ionicon" />
          </Text>
          <TextInput
            style={style.input}
            onChangeText={setId}
            value={id}
            placeholder="personal ID"
            keyboardType="numeric"
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <BlackButton text="Save" screen="profile" />
        </View>
      </View>
    </View>
  );
};
export { PersonalInformation };
