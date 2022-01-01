import React, { useRef } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import Header from "../../components/header";
import { CategoryBox, CategoryHeader } from "./components/index";
import { Icon } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import { CommonButton } from "../buttons";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";

const Category = ({ navigation }) => {
  const refRBSheet = useRef();
  const data = [
    { name: "Flowers", type: "All Category" },
    { name: "Plants", type: "Indoor" },
    { name: "Plants", type: "Outdoor" },
    { name: "Pots", type: "All Types" },
    { name: "Accessories", type: "supplements" },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        onPress={() => refRBSheet.current.open()}
        dropdownText="Current Location"
      />
      <View style={style.searchBar}>
        <SearchBar placeholder="Search" />
      </View>
      <CategoryHeader
        headingText="Discover Plant & Flower"
        address="R306 Sharifabd FB Area Block 1 Karachi"
      />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          {data?.map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() =>
                navigation.navigate("categoryDetail", {
                  detailName: item?.name,
                })
              }
              style={{ width: "47%" }}
            >
              <CategoryBox name={item.name} type={item.type} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={230}
          customStyles={{
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <View style={{ flexGrow: 1, alignItems: "center" }}>
            <View style={{ width: "90%", borderRadius: 5, padding: 10 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Select Delivery Address
              </Text>
              <View style={style.item}>
                <Icon name="location" size={30} color="black" type="ionicon" />
                <Text style={style.text}>Current Location</Text>
              </View>
              <View style={style.item}>
                <Icon name="add" size={30} color="black" type="ionicon" />
                <Text style={style.text}>Add an Address</Text>
              </View>
            </View>

            <View style={{ width: "90%" }}>
              <CommonButton text="Cancel" />
            </View>
          </View>
        </RBSheet>
      </View>
    </View>
  );
};
export default Category;

const style = StyleSheet.create({
  searchBar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    margin: 3,
    padding: 5,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
  },
  text: {
    paddingLeft: 10,
    fontSize: 18,
  },
});
