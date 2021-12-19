import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../../components/header";
import { BlackButton } from "../buttons";
import { Count } from "../category/components";

const ListDetail = ({ route }) => {
  const { name, price } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Header headingText={name} rightIcon="heart-outline" rightSize={24} />
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 20,
            alignItems: "center",
            paddingBottom: 30,
          }}
        >
          <Image
            source={{
              uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
            }}
            style={{ width: 150, height: 150 }}
          />
        </View>
        <View style={{ margin: 25 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {name}
          </Text>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginVertical: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 17 }}>{price}</Text>
            </View>

            <Count />
          </View>
          <Text
            style={{
              fontSize: 14,
              color: "gray",
              marginBottom: 20,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <BlackButton text="Add to Cart" />
        </View>
      </View>
    </View>
  );
};

export default ListDetail;
