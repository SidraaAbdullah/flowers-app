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
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
import { useQuery } from "react-query";
import { CATEGORY } from "../../queries";
import { CategoriesHomePage } from "../skeletons/categoriesHomePage";
import useStorage from "../../hooks/useStorage";
import LottieView from "lottie-react-native";
import sorry from "../../assets/images/sorry.json";
import LocationSheet from "../bottom-sheet/LocationSheet";

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
          inputStyle={style.inputStyle}
          placeholderTextColor={"black"}
        />
      </View>

      <CategoryHeader
        headingText="Discover Plant & Flower"
        address={location.address || "Current location"}
      />

      {categoriesLoading && !category?.data?.length ? (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {[1, 2, 3, 4, 5, 6].map((v, i) => (
            <CategoriesHomePage key={i} />
          ))}
        </View>
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
                style={{ width: "47%", marginHorizontal: 5 }}
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
      <LocationSheet refRBSheet={refRBSheet} location={location} />
    </View>
  );
};
export default Category;

const style = StyleSheet.create({
  searchBarBox: {
    marginTop: 5,
  },
  inputStyle: {
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "lightgray",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderStyle: "dashed",
    fontSize: 14,
    fontFamily: "ProximaNova",
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
    fontSize: 14,
    fontFamily: "ProximaNova",
    color: "black",
  },
});
