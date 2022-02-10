import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { CategoryName, FilterList, ListSetting } from "../components";
import Header from "../../header";
import { useQuery } from "react-query";
import { PRODUCT } from "../../../queries";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";

const CategoryDetail = ({ navigation, route }) => {
  const [query, setQuery] = useState({ page_no: 1, search: "" });
  const [data, setData] = useState([]);
  const [dataRefreshed, setDataRefreshed] = useState(false);
  const { categoryName, categoryId } = route?.params || {};
  const {
    data: products,
    isLoading: productIsLoading,
    isRefetching: productIsFetching,
    refetch: refetchProducts,
  } = useQuery(
    [
      "PRODUCT",
      {
        category_id: categoryId,
        ...query,
        records_per_page: 10,
      },
    ],
    PRODUCT,
    {
      onSuccess: (res) => {
        if (dataRefreshed) {
          setData(res?.data);
          setDataRefreshed(false);
        } else {
          setData([...data, ...res?.data]);
        }
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
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20,
            borderWidth: 2,
            borderColor: "#f9f9f9",
            borderRadius: 5,
          }}
        >
          <SearchBar
            value={query?.search}
            onChangeText={(e) => {
              setDataRefreshed(true);
              setQuery({ page_no: 1, search: e });
            }}
            placeholder="Search"
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
          pageNumber={query.page_no}
          setQuery={setQuery}
          data={data?.length ? data : products?.data}
          refetchProducts={refetchProducts}
          productIsFetching={productIsFetching}
          setDataRefreshed={setDataRefreshed}
        />
      </View>
    </View>
  );
};
export { CategoryDetail };
