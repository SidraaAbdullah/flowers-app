import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const CommentBox = ({ comment, setComment }) => {
  return (
    <View style={{ width: "85%", marginTop: 10 }}>
      <Text style={{ fontFamily: "ProximaNovaSemiBold", fontSize: 16 }}>
        Comments
      </Text>
      <View style={styles.textAreaContainer}>
        <TextInput
          value={comment}
          onChangeText={(text) => setComment(text)}
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={3}
        />
      </View>
    </View>
  );
};
export { CommentBox };

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: "lightgray",
    borderStyle: "dashed",
    borderWidth: 2,
    padding: 8,
    borderRadius: 10,
    marginVertical: 10,
    height: 70,
  },
});
