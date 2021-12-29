import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { Rating } from ".";
import { Icon } from "react-native-elements";
const List = ({ item, navigation }) => {
  return (
    <View style={{ width: "100%" }}>
      <View style={{ marginRight: 8, marginBottom: 8 }}>
        <View style={styles.border}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("listDetail", {
                  name: item.name,
                  price: item.price,
                })
              }
              activeOpacity={0.5}
            >
              <View style={{ width: "30%" }}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={{
                    uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
                  }}
                />
              </View>
            </TouchableOpacity>

            <View style={{ width: "70%" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("listDetail", {
                    name: item.name,
                    price: item.price,
                  })
                }
                activeOpacity={0.5}
                style={{ paddingRight: 10 }}
              >
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.text}>{item?.name}</Text>
                  <Text style={styles.text}>{item?.price}</Text>
                </View>

                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "ProximaNova",
                    fontSize: 14,
                    color: "gray",
                  }}
                >
                  {item?.place}
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginTop: 8,
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
                  onPress={() =>
                    navigation.navigate("Cart", {
                      categoryName: item.name,
                      categoryPrice: item.price,
                      categoryPlace: item.place,
                    })
                  }
                >
                  <Icon name="add" color="white" type="ionicon" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export { List };

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    justifyContent: "center",
    borderStyle: "dashed",
    borderRadius: 8,
    borderColor: "gray",
    backgroundColor: "white",
  },
  text: {
    fontFamily: "ProximaNovaSemiBold",
    fontSize: 15,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
