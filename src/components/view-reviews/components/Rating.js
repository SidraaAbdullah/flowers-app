import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
const Rating = () => {
    return (
        <View
            style={{
                paddingVertical: 5,
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <Icon name="star-outline" color="gray" size={16} type="ionicon" />
            <Icon name="star-outline" color="gray" size={16} type="ionicon" />
            <Icon name="star-outline" color="gray" size={16} type="ionicon" />
            <Icon name="star-outline" color="gray" size={16} type="ionicon" />
            <Icon name="star-outline" color="gray" size={16} type="ionicon" />
            <Text
                style={{
                    color: "black",
                    marginLeft: 5,
                    marginTop: 3,
                    fontFamily: "ProximaNovaSemiBold",
                    fontSize: 14,
                }}
            >
                4.6
            </Text>
        </View>
    );
};
export { Rating };
