import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
const TopImage = ({ headingText, personalInfo }) => {
  return (
    <View
      style={{
        marginTop: 30,
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {personalInfo ? (
        <Avatar
          rounded
          size={110}
          source={{
            uri: "https://cci-research.nl/author/aya-fukami/avatar_hu3c18ec414e2e5615db7090f5d5745dd7_17253_270x270_fill_lanczos_center_2.png",
          }}
          showEditButton
        />
      ) : (
        <Text>Image</Text>
      )}
      <Text style={style.text}>{headingText}</Text>
      <Text
        style={{
          fontSize: 14,
          textAlign: "center",
          paddingHorizontal: 40,
          color: "gray",
        }}
      >
        Loreum ipsum dolor sit amet, consectetur non adipiscing elit.
      </Text>
    </View>
  );
};
export { TopImage };

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 5,
  },
});
