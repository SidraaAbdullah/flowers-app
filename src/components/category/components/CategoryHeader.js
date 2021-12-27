import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Avatar } from "react-native-elements";
const CategoryHeader = ({ headingText, personalInfo, address }) => {
    return (
        <View
            style={{
                marginTop: 30,
                marginBottom: 30,
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Text style={style.text}>{headingText}</Text>
            <Text
                style={{
                    fontSize: 14,
                    textAlign: "center",
                    paddingHorizontal: 40,
                    color: "gray",
                }}
            >
                <Text>Delivering to:{address}</Text>
            </Text>
        </View>
    );
};
export { CategoryHeader };

const style = StyleSheet.create({
    text: {
        fontSize: 20,
        marginVertical: 5,
    },
});
