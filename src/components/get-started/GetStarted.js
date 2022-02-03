import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Animated } from "react-native";
import { Carousel } from "../../constants";
import { CommonButton } from "../buttons";
import { Paginator, CarouselItem } from "./compoents";

const GetStarted = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const changeTo = (index) => {
    slidesRef.current.scrollToIndex({ index: index });
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={Carousel}
          renderItem={({ item }) => <CarouselItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator
        data={Carousel}
        scrollX={scrollX}
        scrollTo={(i) => changeTo(i)}
      />
      <View style={{ width: "80%" }}>
        <CommonButton
          onPress={() => navigation.navigate("signUp")}
          text="CREATE ACCOUNT"
          rightIcon
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 35,
    backgroundColor: "white",
  },
});

export default GetStarted;
