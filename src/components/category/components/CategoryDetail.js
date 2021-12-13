import React from "react";
import { TouchableOpacity, View, Animated, Text, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import { CategoryList } from ".";
import Header from "../../header";
const CategoryDetail = ({ navigation }) => {
  const data = [
    { id: "1", name: "Flowers", place: "135 Places" },
    { id: "2", name: "Plants Outdoor", place: "125 Places" },
    { id: "3", name: "Plants Indoor", place: "35 Places" },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Header headingText="Flowers" />
      <View style={{ margin: 20, marginRight: 15 }}>
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
      </View>
    </View>
  );
};
export { CategoryDetail };
