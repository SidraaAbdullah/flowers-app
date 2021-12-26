import React from "react";
import { View, Text, FlatList } from "react-native";
import { CategoryName, FilterList, ListSetting } from ".";
import Header from "../../header";

const CategoryDetail = ({ navigation }) => {
  const filterData = [
    { id: "1", name: "Over 4.5" },
    { id: "2", name: "Browser by Bouquets" },
    { id: "3", name: "Buy flowers in Box" },
    { id: "4", name: "Browser by Bouquets" },
    { id: "5", name: "Buy flowers in Box" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="Flowers" />
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
          <CategoryName />
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
        <ListSetting navigation={navigation} />
      </View>
    </View>
  );
};
export { CategoryDetail };
