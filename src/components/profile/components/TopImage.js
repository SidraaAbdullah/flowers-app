import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Avatar } from "react-native-elements";

const TopImage = ({ headingText, personalInfo }) => {
  return (
    <View style={styles.container}>
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
        <Image
          style={{ height: 150, width: 250 }}
          source={require("../../../assets/images/profile_information.png")}
        />
      )}
      <Text style={styles.text}>{headingText}</Text>
      <Text style={styles.discription}>
        Information that cannot be viewed by other users
      </Text>
    </View>
  );
};
export { TopImage };

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 5,
    fontFamily: "ProximaNovaSemiBold",
  },
  discription: {
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 40,
    color: "gray",
    fontFamily: "ProximaNova",
  },
  container: {
    marginTop: 30,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
