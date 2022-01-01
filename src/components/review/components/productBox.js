import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";


const ProductBox = ({ name, message, image }) => {
    return (
        <TouchableOpacity
            style={styles.border}
        >
            <View>
                {image ? <Image
                    source={{
                        uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
                    }}
                    style={{ width: 70, height: 70 }}
                /> : <Text>image</Text>}
            </View>
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingLeft: 10
                }}
            >

                <Text style={styles.header}>{name}</Text>
                <Text style={styles.para}>{message}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" color="gray" size={16} type="ionicon" />
                    <Icon name="star-outline" color="gray" size={16} type="ionicon" />
                    <Icon name="star-outline" color="gray" size={16} type="ionicon" />
                    <Icon name="star-outline" color="gray" size={16} type="ionicon" />
                    <Icon name="star-outline" color="gray" size={16} type="ionicon" />
                </View>
            </View>
        </TouchableOpacity>
    );
};
export { ProductBox };

const styles = StyleSheet.create({
    border: {
        borderStyle: "dashed",
        borderColor:'lightgray',
        borderWidth: 2,
        borderRadius: 10,
        padding: 8,
        marginBottom: 10,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        width: "85%",
    },
    header: {
        fontSize: 16,
        fontFamily: "ProximaNovaSemiBold",
    },
    para: {
        fontSize: 14,
        color: 'gray',
        fontFamily: "ProximaNova",
    }
});
