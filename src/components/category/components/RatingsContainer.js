import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Rating } from "../../category/components";

const RatingsContainer = ({ pointerEvents, setRating, rating }) => {
  const obj = [1, 2, 3, 4, 5];
  const onPressStar = (v) => {
    setRating(v);
  };
  return (
    <View
      pointerEvents={!pointerEvents && "none"}
      style={{ flexDirection: "row" }}
    >
      {obj.map((v, i) => {
        return (
          <TouchableOpacity
            style={{ marginRight: 3 }}
            key={i}
            onPress={() => {
              onPressStar(v);
            }}
          >
            <Rating
              starSize={16}
              type={
                v <= rating ? "filled" : v === rating + 0.5 ? "half" : "empty"
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export { RatingsContainer };
