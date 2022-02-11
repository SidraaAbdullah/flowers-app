import React, { useRef, useState } from "react";
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
import { Rating } from "./components/Rating";
import LottieView from "lottie-react-native";
import sorry from "../../assets/images/sorry.json";

const Category = ({ navigation }) => {
  const refRBSheet = useRef();
  const [location] = useStorage("ca_location", { isObject: true });
  const [search, setSearch] = useState("");
  const {
    data: category,
    isLoading: categoriesLoading,
    isRefetching: categoryIsFetching,
    refetch: refetchCategories,
  } = useQuery(["CATEGORY", { search }], CATEGORY);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        onPress={() => refRBSheet.current.open()}
        dropdownText={location.address || "Current location"}
        headerTextStyle={{ width: "85%" }}
      />
      <View style={style.searchBarBox}>
        <SearchBar
          value={search}
          onChangeText={(e) => setSearch(e)}
          placeholder="Search"
          inputStyle={{ backgroundColor: "#f9f9f9" }}
          containerStyle={{
            shadowColor: "gray",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.3,
            shadowRadius: 100,
            elevation: 7,
          }}
          placeholderTextColor={"lightgray"}
        />
      </View>

      <CategoryHeader
        headingText="Discover Plant & Flower"
        address={location.address || "Current location"}
      />
      {categoriesLoading && !category?.data?.length ? (
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
                    item: item,
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
                  <LottieView
                    style={{ width: 250, height: 200 }}
                    source={sorry}
                    autoPlay
                    loop={true}
                    speed={1}
                  />

                  <Text style={style.label}>Sorry No Products available</Text>
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
                  fontSize: 18,
                  fontFamily: "ProximaNovaSemiBold",
                }}
              >
                Select Delivery Address
              </Text>
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={style.item}>
                  <Icon
                    name="location-outline"
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
              <CommonButton
                text="Cancel"
                rightIcon
                rightIconName="close"
                onPress={() => refRBSheet.current.close()}
              />
            </View>
          </View>
        </RBSheet>
      </View>
    </View>
  );
};
export default Category;

const style = StyleSheet.create({
  searchBarBox: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,

    // shadowColor: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  searchBar: {
    // shadowColor: "blue",
    // shadowOffset: 2,
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
  label: {
    fontFamily: "ProximaNovaSemiBold",
    fontSize: 18,
    marginTop: 5,
    color: "red",
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
    fontSize: 15,
    fontFamily: "ProximaNova",
    color: "black",
  },
});
