import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { CategoryName, FilterList, ListSetting } from "../components";
import Header from "../../header";
import { useQuery } from "react-query";
import { PRODUCT } from "../../../queries";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";

const CategoryDetail = ({ navigation, route }) => {
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const { categoryName, categoryId } = route?.params || {};

  const {
    data: products,
    isLoading: productIsLoading,
    refetch: refetchProducts,
    isFetching: productIsFetching,
  } = useQuery(
    [
      "PRODUCT",
      {
        category_id: categoryId,
        search,
        page_no: pageNumber,
        records_per_page: 10,
      },
    ],
    PRODUCT,
    {
      onSuccess: (res) => {
        setData([...data, ...res?.data]);
      },
    }
  );
  const filterData = [
    { id: "1", name: "Over 4.5" },
    { id: "2", name: "Browser by Bouquets" },
    { id: "3", name: "Buy flowers in Box" },
    { id: "4", name: "Browser by Bouquets" },
    { id: "5", name: "Buy flowers in Box" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText={categoryName} />
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginTop: 7,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
         
          }}
        >
          <SearchBar
            value={search}
            onChangeText={(e) => {
              setData([]);
              setPageNumber(1);
              setSearch(e);
            }}
            placeholder="Search"
            inputStyle={{ backgroundColor: "#f9f9f9",  }}
          containerStyle={{
            shadowColor: "gray",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.30,
            shadowRadius: 100,
            elevation: 70,
            
          }}
          placeholderTextColor={"lightgray"}
          />
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <CategoryName categoryName={categoryName} />
          <FlatList
            data={filterData}
            renderItem={({ item }) => (
              <FilterList navigation={navigation} item={item} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={(item) => item.id}
          />
        </View>
        <ListSetting
          navigation={navigation}
          products={products}
          categoryId={categoryId}
          productIsLoading={productIsLoading}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          data={data || []}
          setData={setData}
          refetchProducts={refetchProducts}
          productIsFetching={productIsFetching}
        />
      </View>
    </View>
  );
};
export { CategoryDetail };
