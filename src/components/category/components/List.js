import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";

const List = ({ item, navigation }) => {
  const [number, setNumber] = useState(0);
  const increment = () => setNumber(number + 1);
  let decrement = () => setNumber(number - 1);
  if (number <= 0) {
    decrement = () => setNumber(0);
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("listDetail", { name: item.name })}
      activeOpacity={0.5}
      style={{ width: "100%" }}
    >
      <View style={{ marginRight: 14, marginBottom: 12 }}>
        <View
          style={{
            borderWidth: 1,
            justifyContent: "center",
            borderStyle: "dashed",
            borderRadius: 8,
            borderColor: "gray",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <View style={{ width: "30%" }}>
              <Image
                style={{ width: 70, height: 70 }}
                source={{
                  uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
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
                <Text style={{ fontSize: 14 }}>{item?.name}</Text>
                <Text style={{ fontSize: 14 }}> {item?.price}</Text>
              </View>

              <Text numberOfLines={1} style={{ fontSize: 12, color: "gray" }}>
                {item?.place}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 12, color: "black" }}>
                  {item?.delivery}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={() => decrement()}>
                  <Icon
                    name="minus"
                    size={20}
                    color="gray"
                    type="font-awesome"
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    marginHorizontal: 8,
                    fontWeight: "bold",
                    fontSize: 16,
                    borderRadius: 6,
                    borderWidth: 1,
                    borderStyle: "dashed",
                    borderColor: "gray",
                    paddingHorizontal: 7,
                    color: "black",
                    backgroundColor: "#f1f1f1",
                  }}
                >
                  {number}
                </Text>
                <TouchableOpacity onPress={() => increment()}>
                  <Icon
                    name="plus"
                    color="gray"
                    size={20}
                    type="font-awesome"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export { List };
