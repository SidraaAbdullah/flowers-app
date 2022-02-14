import React, { useState } from "react";
import { View } from "react-native";
import { CategoryName, ListSetting } from "../components";
import Header from "../../header";
import { useQuery } from "react-query";
import { PRODUCT } from "../../../queries";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";

const CategoryDetail = ({ navigation, route }) => {
  const [query, setQuery] = useState({ page_no: 1, search: "" });
  const [data, setData] = useState([]);
  const [dataRefreshed, setDataRefreshed] = useState(false);
  const { item } = route?.params || {};
  const {
    data: products,
    isLoading: productIsLoading,
    isRefetching: productIsFetching,
    refetch: refetchProducts,
  } = useQuery(
    [
      "PRODUCT",
      {
        category_id: item?._id,
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
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText={item?.name} />
      <View style={{ flex: 1 }}>
        <View style={{ marginVertical: 7, marginHorizontal: 20 }}>
          <SearchBar
            value={query?.search}
            onChangeText={(e) => {
              setDataRefreshed(true);
              setQuery({ page_no: 1, search: e });
            }}
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
              elevation: 70,
            }}
            placeholderTextColor={"lightgray"}
          />
        </View>
        <View style={{ paddingHorizontal: 15, marginBottom: 15 }}>
          <CategoryName item={item} />
        </View>
        <ListSetting
          navigation={navigation}
          products={products}
          categoryId={item?._id}
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
