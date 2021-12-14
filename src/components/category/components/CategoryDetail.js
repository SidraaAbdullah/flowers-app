import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { CategoryList, FilterList, FlowerList } from ".";
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
  const flowerList = [
    {
      id: "1",
      name: "Flower Store/ 4.5",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "27min . Deleivery",
      price: "5$",
    },
    {
      id: "2",
      name: "Flower Shop/ 4.3",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "20min . Deleivery",
      price: "20$",
    },
    {
      id: "3",
      name: "Flower Store/ 4.5",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "30min . Deleivery",
      price: "30$",
    },
    {
      id: "4",
      name: "Flower Shop/ 4.3",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "40min . Deleivery",
      price: "10$",
    },
    {
      id: "5",
      name: "Flower Shop/ 4.3",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "20min . Deleivery",
      price: "20$",
    },
    {
      id: "6",
      name: "Flower Store/ 4.5",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "30min . Deleivery",
      price: "30$",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Header headingText="Flowers" />
      <View style={{ margin: 15, marginVertical: 20 }}>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>List Setting: </Text>
            <Text style={{ marginHorizontal: 3 }}>
              <Icon name="apps" type="ionicon" size={18} />
            </Text>
            <Text>
              <Icon name="list" type="ionicon" />
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Price: </Text>
            <Text>
              <Icon name="" type="" />
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginRight: 2,
            marginLeft: 15,
          }}
        >
          {flowerList.map((list, index) => (
            <FlowerList item={list} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export { CategoryDetail };
