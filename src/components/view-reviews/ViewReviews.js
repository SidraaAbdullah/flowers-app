import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from "react-native";
import Header from "../../components/header";




const ViewReviews = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header headingText="Product's Review" />
            <ScrollView>
                <Text>View Reviews</Text>

            </ScrollView>

        </View>
    );
};
export default ViewReviews;

const styles = StyleSheet.create({

});
