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
import { useQuery } from "react-query";
import { CATEGORY } from "../../queries";

const Category = ({ navigation }) => {
  const refRBSheet = useRef();
  const { data: category } = useQuery("CATEGORY", CATEGORY);
  console.log(category?.data);
  // const data = [
  //   { name: "Flowers", type: "All Category" },
  //   { name: "Plants", type: "Indoor" },
  //   { name: "Plants", type: "Outdoor" },
  //   { name: "Pots", type: "All Types" },
  //   { name: "Accessories", type: "supplements" },
  // ];
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
          {category?.data?.map((item) => (
            <TouchableOpacity
              key={item?._id}
              onPress={() =>
                navigation.navigate("categoryDetail", {
                  categoryName: item?.name,
                  categoryId: item?._id,
                })
              }
              style={{ width: "47%" }}
            >
              <CategoryBox name={item.name} type={"Category About"} />
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
            <View style={{ width: "100%", borderRadius: 5, padding: 10 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontFamily: "ProximaNovaSemiBold",
                }}
              >
                Select Delivery Address
              </Text>
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity
                  style={style.item}
                  onPress={() =>
                    navigation.navigate("home", {
                      screen: "Account",
                      params: {
                        screen: "addAddress",
                      },
                    })
                  }
                >
                  <Icon
                    name="location"
                    size={25}
                    color="black"
                    type="ionicon"
                  />
                  <Text style={style.text}>Current Location</Text>
                </TouchableOpacity>
                <View style={style.item}>
                  <Icon name="add" size={25} color="black" type="ionicon" />
                  <Text style={style.text}>Add an Address</Text>
                </View>
              </View>
            </View>

            <View style={{ width: "90%" }}>
              <CommonButton text="Cancel" rightIcon rightIconName="close" />
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
    paddingRight: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingVertical: 8,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    width: "100%",
  },
  text: {
    paddingLeft: 10,
    fontSize: 17,
    fontFamily: "ProximaNovaSemiBold",
    color: "black",
  },
});
