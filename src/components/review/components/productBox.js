import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import { RatingsContainer } from "../../category/components/RatingsContainer";

const ProductBox = ({
  name,
  message,
  image,
  productRating,
  setproductRating,
}) => {
  return (
    <View style={styles.border}>
      <View>
        {image ? (
          <Image
            source={{
              uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
            }}
            style={{ width: 70, height: 70 }}
          />
        ) : (
          <Text>image</Text>
        )}
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft: 10,
        }}
      >
        <Text style={styles.header}>{name}</Text>
        <Text ellipsizeMode="tail" numberOfLines={2} style={styles.para}>
          {message}
        </Text>
        <RatingsContainer
          pointerEvents
          rating={productRating}
          setRating={setproductRating}
        />
      </View>
    </View>
  );
};
export { ProductBox };

const styles = StyleSheet.create({
  border: {
    borderStyle: "dashed",
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
  },
  header: {
    fontSize: 16,
    fontFamily: "ProximaNovaSemiBold",
  },
  para: {
    fontSize: 14,
    color: "gray",
    marginVertical: 3,
    fontFamily: "ProximaNova",
    width: 200,
  },
});
