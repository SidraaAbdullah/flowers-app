import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../../components/header";
import { BlackButton } from "../buttons";
import { Icon } from "react-native-elements";

const ListDetail = ({ route }) => {
  const { name } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Header headingText={name} />
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
          <Text
            style={{
              fontSize: 14,
              color: "gray",
              marginBottom: 10,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <View>
              <Text>
                <Icon name="star-outline" size={18} type="ionicon" />
                <Icon name="star-outline" size={18} type="ionicon" />
                <Icon name="star-outline" size={18} type="ionicon" />
                <Icon name="star-outline" size={18} type="ionicon" />
                <Icon name="star-outline" size={18} type="ionicon" />
              </Text>
            </View>
            <View>
              <Text>
                <Icon
                  name="share-outline"
                  style={{ marginHorizontal: 5 }}
                  type="ionicon"
                  size={18}
                />
                <Icon size={18} name="heart-outline" type="ionicon" />
              </Text>
            </View>
          </View>
          <BlackButton text="Add to Cart" />
        </View>
      </View>
    </View>
  );
};

export default ListDetail;
