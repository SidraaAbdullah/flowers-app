import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../../components/header";
import { CommonButton } from "../buttons";
import { CommentBox } from "./components/commentBox";
import { ProductBox } from "./components/productBox";
import { ProductReviewHeader } from "./components/productReviewHeader";
import { useMutation } from "react-query";
import { showToast } from "../../util/toast";
import { ADD_REVIEW } from "../../queries";

const Review = ({ navigation }) => {
  const [comment, setComment] = useState();
  const [productRating, setproductRating] = useState(0);
  const [riderRating, setriderRating] = useState(0);
  const { mutate: addReview, isLoading: addReviewLoading } =
    useMutation(ADD_REVIEW);

  const handleAddReview = async () => {
    await addReview(
      { id: item?._id, status: "CANCELLED", comment },
      {
        onSuccess: async () => {
          showToast("Your review has been added", "success");
        },
        onError: (res) => {
          showToast(res.response?.data?.message, "danger");
        },
      }
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="Product Review" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <ProductReviewHeader image />
          <ProductBox
            productRating={productRating}
            setproductRating={setproductRating}
            image
            name="Flowers in Box"
            message="Please rate your feedback will help"
          />
          <ProductBox
            productRating={riderRating}
            setproductRating={setriderRating}
            image
            name="Salman Siddiqui"
            message="Please rate our Rider"
          />
          <CommentBox comment={comment} setComment={setComment} />
          <View style={{ width: "88%", marginVertical: 10 }}>
            <CommonButton text="ADD REVIEW" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Review;

const styles = StyleSheet.create({});
