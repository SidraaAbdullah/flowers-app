import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Rating } from ".";

const BoxList = ({ item, navigation }) => {
  return (
    <View style={{ width: "50%" }}>
      <View style={{ marginBottom: 8, marginRight: 8 }}>
        <View style={styles.border}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("listDetail", {
                name: item.name,
                price: item.price,
              })
            }
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <Image
                source={{
                  uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
                }}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <View
              style={{
                paddingVertical: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{item?.name}</Text>
                <Text style={styles.text}>{item.price}</Text>
              </View>

              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "ProximaNova",
                  fontSize: 14,
                  color: "gray",
                  marginTop: 2,
                }}
              >
                {item?.description}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Rating />
            <TouchableOpacity
              style={{
                borderRadius: 15,
                backgroundColor: "black",
                width: 28,
                height: 28,
                padding: 1,
                paddingLeft: 3,
              }}
              onPress={() => navigation.navigate("Cart")}
            >
              <Icon name="add" color="white" type="ionicon" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export { BoxList };

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    justifyContent: "center",
    borderStyle: "dashed",
    borderRadius: 8,
    borderColor: "gray",
    paddingTop: 10,
    paddingBottom: 6,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  text: {
    fontFamily: "ProximaNovaSemiBold",
    fontSize: 15,
  },
});
