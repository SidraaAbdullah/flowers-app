import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from "react-native";
import Header from "../../components/header";
import { CommonButton } from "../buttons";
import { PostsReviews } from "./components/postsReviews";
import { ViewReviewsHeader } from "./components/ViewReviewsHeader";




const ViewReviews = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header headingText="Product's Review" />
            <ScrollView>

                <View style={{ alignItems: 'center' }}>
                    
                   
                    <View style={{ width: "90%" }}>
                        <CommonButton text="Load More" />
                    </View>
                </View>

            </ScrollView>

        </View>
    );
};
export default ViewReviews;

const styles = StyleSheet.create({

});
