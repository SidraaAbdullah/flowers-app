import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { BlackButton } from "../../buttons";
import { Icon } from "react-native-elements";
import { style } from "./style";

const ForgotPassword = () => {
  const [email, setEmail] = useState(null);
  return (
    <View style={style.container}>
      <View
        style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
      >
        <Text>Image</Text>
      </View>
      <View style={style.sectionStyle}>
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
      <View style={{ marginTop: 10 }}>
        <BlackButton text="Send Email" />
      </View>
    </View>
  );
};
export { ForgotPassword };
