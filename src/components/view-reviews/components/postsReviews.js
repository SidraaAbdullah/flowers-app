import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const PostsReviews = ({ image }) => {
    return (
        <View style={styles.parentContainer}>
            <View style={styles.container}>
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

                    <Text style={styles.header}>Laura Grinberg</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.para}>02 June 2019 /</Text>
                        <Icon name="star-outline" color="gray" size={16} type="ionicon" />
                        <Icon name="star-outline" color="gray" size={16} type="ionicon" />
                        <Icon name="star-outline" color="gray" size={16} type="ionicon" />

                    </View>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={styles.content}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been text ever since the 1500s.
                </Text>
                <Text style={styles.content}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been text ever since the 1500s.
                </Text>
            </View>
        </View>
    );
};
export { PostsReviews };

const styles = StyleSheet.create({
    parentContainer: {
        borderStyle: "dashed",
        borderColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        flexDirection: "column",
        width: '85%'
    },
    container: {
        // marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: 'lightgray',
        padding: 5
    },
    header: {
        fontFamily: 'ProximaNovaSemiBold',
        fontSize:18
    },
    para: {
        color: 'gray'
    },
    content: {
        fontFamily: 'ProximaNova',
        color: 'gray',
    }

})