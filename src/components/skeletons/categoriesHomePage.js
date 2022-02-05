import React from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
const HomeCardSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.bgColorImage}

        />
      </View>

      <View style={{ paddingVertical: 6, paddingHorizontal: 2 }}>
        <Text
          style={styles.bgColor}

        >

        </Text>
        <Text
          style={styles.bgColor}
        >

        </Text>
      </View>
    </View>
  );
};
export { HomeCardSkeleton };

const styles = StyleSheet.create({
  container: {
    borderStyle: "dashed",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    margin: 4,
    // backgroundColor:'#f4f0ec'
  },
  bgColorImage: {
    backgroundColor: 'lightgray',
    width: 90, height: 90
  },
  bgColor: {
    backgroundColor: 'lightgray',
    margin: 1,
    
  }
});
