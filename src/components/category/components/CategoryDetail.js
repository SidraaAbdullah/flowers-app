import React from "react";
import { View, FlatList } from "react-native";
import { CategoryName, FilterList, ListSetting } from "../components";
import Header from "../../header";
import { useQuery } from "react-query";
import { PRODUCT } from "../../../queries";

const CategoryDetail = ({ navigation, route }) => {
  const { data: products } = useQuery("PRODUCT", PRODUCT);
  const { categoryName, categoryId } = route.params;
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
        <View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
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
        />
      </View>
    </View>
  );
};
export { CategoryDetail };
