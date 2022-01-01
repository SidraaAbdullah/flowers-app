import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductReviewHeader = ({ reviewHeader, reviewPara, image }) => {
    return (
        <View
            style={{
                // width: '100%',
                display: 'flex',
                backgroundColor: 'pink',
                alignItems: 'center',
                paddingVertical: 10
            }}
        >
            <View>
                <Image
                    source={{
                        uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
                    }}
                    style={{ width: 70, height: 70 }}
                />

            </View>

            <Text style={style.header}>"BestFlow" Flowers Store</Text>
            <Text style={style.para}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been text ever since the 1500s.
            </Text>

        </View>
    );
};
export { ProductReviewHeader };

const style = StyleSheet.create({
    header: {
        fontSize: 20,
        fontFamily: "ProximaNovaBold",
        paddingVertical: 10,

    },
    para: {
        fontSize: 14,
        color: 'gray',
        fontFamily: "ProximaNova",
        paddingHorizontal: 30,
        textAlign: 'center',
        lineHeight: 18
    }
});
