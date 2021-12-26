import React from "react";
import { View, Text, Image } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../components/header";
import { CommonButton } from "../buttons";
import { Count, Rating } from "../category/components";

const ListDetail = ({ route }) => {
  const { name, price } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Header
        headingText={name}
        rightIcon="heart-outline"
        rightSize={24}
        rightType="ionicon"
      />
      <View style={{ flex: 1, backgroundColor: "white" }}>
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
        <ScrollView>
          <View style={{ margin: 20, marginTop: 15 }}>
            <View
              style={{
                borderWidth: 1,
                borderStyle: "dashed",
                borderRadius: 8,
                borderColor: "gray",
                padding: 10,
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: 5,
                }}
              >
                <Rating />
                <TouchableOpacity activeOpacity={1}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      marginTop: 3,
                    }}
                  >
                    <Text style={{ color: "black" }}>Read reviews</Text>
                    <Icon
                      name="chevron-forward-outline"
                      type="ionicon"
                      size={22}
                      style={{ marginTop: 2 }}
                      color={"black"}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View>
                <Text style={{ fontSize: 17 }}>{price}</Text>
              </View>
              <Count />
            </View>
            <View
              style={{
                borderWidth: 1,
                borderStyle: "dashed",
                borderRadius: 8,
                borderColor: "gray",
                padding: 10,
                marginVertical: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                What is?
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "gray",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </Text>
            </View>

            <CommonButton
              text="Add to Cart"
              screen="Cart"
              isIcon
              iconName="cart-outline"
              iconSize={24}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ListDetail;
