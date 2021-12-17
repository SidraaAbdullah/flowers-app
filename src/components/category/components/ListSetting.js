import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { List, BoxList } from ".";
import { Icon } from "react-native-elements";
const ListSetting = () => {
  const [value, setValue] = useState("boxStyle");
  const changeTo = (val) => {
    setValue(val);
  };

  const listColor = value === "listStyle" ? "green" : "black";
  const boxColor = value === "boxStyle" ? "green" : "black";
  const flowerList = [
    {
      id: "1",
      name: "Flower Store/ 4.5",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "27min . Deleivery",
      price: "5$",
    },
    {
      id: "2",
      name: "Flower Shop/ 4.3",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "20min . Deleivery",
      price: "20$",
    },
    {
      id: "3",
      name: "Flower Store/ 4.5",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "30min . Deleivery",
      price: "30$",
    },
    {
      id: "4",
      name: "Flower Shop/ 4.3",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "40min . Deleivery",
      price: "10$",
    },
    {
      id: "5",
      name: "Flower Shop/ 4.3",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "20min . Deleivery",
      price: "20$",
    },
    {
      id: "6",
      name: "Flower Store/ 4.5",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "30min . Deleivery",
      price: "30$",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 15,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            List Setting:
          </Text>
          <TouchableOpacity
            onPress={() => changeTo("boxStyle")}
            style={{ marginHorizontal: 3, marginTop: 3 }}
          >
            <Icon color={boxColor} name="apps" type="ionicon" size={18} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 3 }}
            onPress={() => changeTo("listStyle")}
          >
            <Icon color={listColor} name="list" type="ionicon" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Price:</Text>
          <Text>
            <Icon name="" type="" />
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: 15,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {value === "boxStyle"
            ? flowerList.map((list, index) => (
                <BoxList item={list} key={index} />
              ))
            : value === "listStyle"
            ? flowerList.map((list, index) => <List item={list} key={index} />)
            : null}
        </View>
      </ScrollView>
    </View>
  );
};
export { ListSetting };
