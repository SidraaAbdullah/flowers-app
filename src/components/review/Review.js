import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from "react-native";
import Header from "../../components/header";



const Review = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header headingText="Product Review" />
            <ScrollView>
                <View>
                    <Text>welcome review screen</Text>
                </View>
            </ScrollView>

        </View>
    );
};
export default Review;

const style = StyleSheet.create({

});
