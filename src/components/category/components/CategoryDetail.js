import React from "react";
import { View, Text, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import { CategoryList, FilterList, ListSetting } from ".";
import Header from "../../header";

const CategoryDetail = ({ navigation }) => {
  const data = [
    { id: "1", name: "Flowers", place: "135 Places" },
    { id: "2", name: "Plants Outdoor", place: "125 Places" },
    { id: "3", name: "Plants Indoor", place: "35 Places" },
    { id: "4", name: "Pots", place: "225 Places" },
  ];
  const filterData = [
    { id: "1", name: "Over 4.5" },
    { id: "2", name: "Browser by Bouquets" },
    { id: "3", name: "By flowers in Box" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header headingText="Flowers" />
      <View style={{ marginHorizontal: 15, marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: "bold" }}>
            Top Categories
          </Text>
          <Text style={{ marginTop: 5 }}>
            <Icon name="search" type="ionicon" />
          </Text>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CategoryList navigation={navigation} item={item} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={(item) => item.id}
        />

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
      <ListSetting />
    </View>
  );
};
export { CategoryDetail };
