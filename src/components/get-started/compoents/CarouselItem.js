import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import { styles } from "./style";

const CarouselItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flex: 1, width: width }}>
      <Image
        style={[styles.image, { width, resizeMode: "contain" }]}
        source={item.imagePath}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.text}</Text>
      </View>
    </View>
  );
};

export { CarouselItem };
