import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Header from "../../components/header";
import { CommonButton } from "../buttons";
import { CommentBox } from "./components/commentBox";
import { ProductBox } from "./components/productBox";
import { ProductReviewHeader } from "./components/productReviewHeader";
import { useMutation } from "react-query";
import { showToast } from "../../util/toast";
import { ADD_REVIEW } from "../../queries";

const Review = ({ navigation, route }) => {
  const { item, refreshData } = route?.params || {};
  const [comment, setComment] = useState("");
  const [products, setProducts] = useState(item?.products);
  const [riderRating, setriderRating] = useState(0);
  const { mutate: addReview, isLoading: addReviewLoading } =
    useMutation(ADD_REVIEW);

  const handleAddReview = async () => {
    await addReview(
      {
        productsRating: filterProductsSubmit(),
        comment,
        id: item?._id,
        driver_rating: riderRating,
      },
      {
        onSuccess: async () => {
          showToast("Your review has  been added", "success");
          await refreshData();
          navigation.navigate("orderHistory");
        },
        onError: (res) => {
          showToast(res.response?.data?.message, "danger");
        },
      }
    );
  };

  const handleSelectRating = ({ product, rating }) => {
    const index = products.findIndex((item) => item._id === product?._id);
    const updatedProducts = [...products];
    updatedProducts[index].selectedRating = rating;
    setProducts(updatedProducts);
  };

  const filterProductsSubmit = () => {
    let updatedProducts = [];
    products.map((item) =>
      updatedProducts.push({
        product_id: item?.product_id?._id,
        rating: item?.selectedRating,
      })
    );
    return updatedProducts;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="Product Review" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <ProductReviewHeader image />
          <Text
            style={{
              fontFamily: "ProximaNovaBold",
              alignSelf: "flex-start",
              marginLeft: 32,
              marginTop: 10,
              fontSize: 16,
            }}
          >
            Products Rating
          </Text>
          {(products || []).map((item, i) => (
            <ProductBox
              key={i}
              productRating={item?.selectedRating}
              setproductRating={(rating) =>
                handleSelectRating({ product: item, rating })
              }
              image
              name={item?.product_id?.name}
              message={item?.product_id?.description}
            />
          ))}
          <Text
            style={{
              fontFamily: "ProximaNovaBold",
              alignSelf: "flex-start",
              marginLeft: 32,
              marginTop: 10,
              fontSize: 16,
            }}
          >
            Rider Rating
          </Text>
          <ProductBox
            productRating={riderRating}
            setproductRating={setriderRating}
            image
            name="Salman Siddiqui"
            message="Please rate our Rider"
          />
          <View style={{ width: "86%" }}>
            <CommentBox comment={comment} setComment={setComment} />
          </View>
          <View style={{ width: "88%", marginVertical: 10 }}>
            <CommonButton onPress={handleAddReview} text="ADD REVIEW" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Review;

const styles = StyleSheet.create({});
