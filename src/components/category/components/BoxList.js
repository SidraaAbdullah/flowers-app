import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";
const BoxList = ({ item, navigation }) => {
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
      style={{ width: "50%" }}
    >
      <View style={{ marginBottom: 20, marginRight: 14 }}>
        <View
          style={{
            borderWidth: 1,
            justifyContent: "center",
            borderStyle: "dashed",
            borderRadius: 8,
            borderColor: "gray",
            paddingTop: 10,
            paddingBottom: 6,
            paddingHorizontal: 5,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Image
              source={{
                uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
              }}
              style={{ width: 90, height: 90 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 5,
            }}
          >
            <Text>60$</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => decrement()}>
                <Icon name="minus" size={20} color="gray" type="font-awesome" />
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
                <Icon name="plus" color="gray" size={20} type="font-awesome" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 5 }}>
          <Text style={{ fontSize: 14 }}>{item?.name}</Text>
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
            <Text style={{ fontSize: 12, color: "black" }}>{item?.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export { BoxList };
