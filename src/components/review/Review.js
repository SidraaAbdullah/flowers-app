import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../../components/header";
import { CommonButton } from "../buttons";
import { ProductBox } from "./components/productBox";
import { ProductReviewHeader } from "./components/productReviewHeader";



const Review = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header headingText="Product Review" />
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <ProductReviewHeader image />
                    <ProductBox image name="Flowers in Box" message="Please rate your feedback will help" />
              
                    <View style={{ width: "90%" }}>
                        <CommonButton text="ADD REVIEW" />
                    </View>
                </View>

            </ScrollView>

        </View>
    );
};
export default Review;

const styles = StyleSheet.create({

});
