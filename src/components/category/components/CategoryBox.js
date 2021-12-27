import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";

const CategoryBox = ({ name, type, screen, navigation, url}) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(screen)}
            style={{
                borderStyle: "dashed",
                borderColor: "lightgray",
                borderWidth: 2,
                borderRadius: 10,
                padding: 15,
                margin: 10,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "40%",
                minHeight: 120
            }}
        >
            <View>
                <Image
                    source={{
                        uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
                    }}
                    style={{ width: 70, height: 70 }}
                />
                <Text style={{ fontSize: 20 }}>{name}</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>{type}</Text>
            </View>

        </TouchableOpacity>
    );
};
export { CategoryBox };

const style = StyleSheet.create({
    text: {
        fontSize: 22,
        marginVertical: 5,
    },
});
