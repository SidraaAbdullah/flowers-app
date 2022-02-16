import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RatingsContainer } from "../../category/components/RatingsContainer";

const ViewReviewsHeader = () => {
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 10,
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

        <Text style={style.header}>"Chattaunga" BAnquet</Text>
      </View>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={style.para}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RatingsContainer />
          </View>
          <Text>(2902 ratings)</Text>
        </View>
      </View>
    </View>
  );
};
export { ViewReviewsHeader };

const style = StyleSheet.create({
  header: {
    fontSize: 20,
    fontFamily: "ProximaNovaBold",
    paddingVertical: 10,
  },
  para: {
    fontSize: 14,
    color: "gray",
    fontFamily: "ProximaNova",
    // paddingHorizontal: 30,
    // textAlign: 'center',
    lineHeight: 18,
  },
});
