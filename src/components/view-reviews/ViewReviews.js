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
      <Header headingText="View Posts" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <ViewReviewsHeader />
          <PostsReviews image />

          <View style={{ width: "90%" }}>
            <CommonButton text="Load More" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ViewReviews;

const styles = StyleSheet.create({});
