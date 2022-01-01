import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from "react-native";
import Header from "../../components/header";
import { ProductReviewHeader } from "./components/productReviewHeader";



const Review = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header headingText="Product Review" />
            <ScrollView>
                <View>
                   <ProductReviewHeader image/>
                </View>
            </ScrollView>

        </View>
    );
};
export default Review;

const style = StyleSheet.create({

});
