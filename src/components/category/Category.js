import React, { useRef, useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  RefreshControl,
} from "react-native";
import Header from "../../components/header";
import { CategoryBox, CategoryHeader } from "./components/index";
import { Icon } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import { CommonButton } from "../buttons";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
import { useQuery } from "react-query";
import { CATEGORY } from "../../queries";
import { CategoriesHomePage } from "../skeletons/categoriesHomePage";
import useStorage from "../../hooks/useStorage";

const Category = ({ navigation }) => {
  const refRBSheet = useRef();
  const [location] = useStorage("ca_location", { isObject: true });
  const [search, setSearch] = useState("");
  const {
    data: category,
    isLoading: categoriesLoading,
    isFetching: categoryIsFetching,
    refetch: refetchCategories,
  } = useQuery(["CATEGORY", { search }], CATEGORY);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        onPress={() => refRBSheet.current.open()}
        dropdownText={location.address || "Current location"}
        headerTextStyle={{ width: "85%" }}
      />
      <View style={style.searchBar}>
        <SearchBar
          value={search}
          onChangeText={(e) => setSearch(e)}
          placeholder="Search"
        />
      </View>
      <CategoryHeader
        headingText="Discover Plant & Flower"
        address={location.address || "Current location"}
      />
      {categoriesLoading ? (
        <CategoriesHomePage />
      ) : (
        <>
          <FlatList
            data={category?.data || []}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            bounces={true}
            contentContainerStyle={[
              {
                marginBottom: 20,
                flexGrow: 1,
              },
            ]}
            refreshControl={
              <RefreshControl
                refreshing={categoryIsFetching}
                onRefresh={() => {
                  refetchCategories();
                }}
              />
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item?._id}
                onPress={() =>
                  navigation.navigate("categoryDetail", {
                    categoryName: item?.name,
                    categoryId: item?._id,
                  })
                }
                style={{ width: "48%", margin: 2 }}
              >
                <CategoryBox item={item} />
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            ListEmptyComponent={() =>
              !categoriesLoading &&
              !categoryIsFetching && (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>Sorry no categories available</Text>
                </View>
              )
            }
          />
        </>
      )}

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
                <TouchableOpacity style={style.item}>
                  <Icon
                    name="location"
                    size={25}
                    color="black"
                    type="ionicon"
                  />
                  <Text style={style.text}>
                    {location.address || "Current location"}
                  </Text>
                </TouchableOpacity>
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
                  <Icon name="add" size={25} color="black" type="ionicon" />
                  <Text style={style.text}>Add an Address</Text>
                </TouchableOpacity>
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
