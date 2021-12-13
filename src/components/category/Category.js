import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Header from "../../components/header";
const Category = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header headingText="Current Location" />
      <TouchableOpacity
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        onPress={() => navigation.navigate("categoryDetail")}
      >
        <Text>Go to category detail Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Category;
