import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RatingsContainer } from "../../category/components/RatingsContainer";

const SingleOrderList = ({ navigation, item, quantity }) => {
  return (
    <View style={{ width: "100%", marginBottom: 12 }}>
      <View style={styles.border}>
        <View style={styles.container}>
          <View style={{ width: "30%" }}>
            <Image
              style={{ width: 80, height: 80, resizeMode: "contain" }}
              source={{
                uri:
                  item?.image ||
                  "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
              }}
            />
          </View>
          <View style={{ width: "70%" }}>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.text}>{item?.name}</Text>
              <Text style={styles.text}>Rs {item?.price}</Text>
            </View>

            <Text
              numberOfLines={1}
              style={{
                fontFamily: "ProximaNova",
                fontSize: 14,
                color: "gray",
              }}
            >
              {item?.description}
            </Text>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: 4,
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RatingsContainer />
              </View>
              <View style={{ marginTop: 3 }}>
                <Text style={[styles.text, { color: "gray", fontSize: 16 }]}>
                  {quantity} item(s)
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            borderTopWidth: 1,
            borderTopColor: "lightgray",
            borderStyle: "dashed",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("categoryDetail", {
                categoryName: item?.category_id?.name,
                categoryId: item?.category_id?._id,
              })
            }
          >
            <Text style={[styles.text, { paddingVertical: 8 }]}>ReOrder</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("reviewScreen")}>
            <Text style={[styles.text, { paddingVertical: 8 }]}>Rate</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};
export { SingleOrderList };

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    justifyContent: "center",
    borderStyle: "dashed",
    borderRadius: 8,
    borderColor: "lightgray",
    backgroundColor: "white",
  },
  text: {
    fontFamily: "ProximaNovaSemiBold",
    fontSize: 17,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
