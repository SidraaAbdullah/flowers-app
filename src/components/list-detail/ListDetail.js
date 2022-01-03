import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import Header from "../../components/header";
import { CommonButton } from "../buttons";
import { Count, Rating } from "../category/components";

const ListDetail = ({ route, navigation }) => {
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
            paddingVertical: 10,
            alignItems: "center",
            paddingBottom: 30,
          }}
        >
          <Image
            source={{
              uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
            }}
            style={{ width: 130, height: 130 }}
          />
        </View>
        <ScrollView>
          <View style={{ margin: 20, marginTop: 15 }}>
            <View style={styles.border}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontFamily: "ProximaNovaSemiBold",
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "gray",
                  fontFamily: "ProximaNova",
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("viewReviewsScreen")}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      marginTop: 3,
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontFamily: "ProximaNovaSemiBold",
                      }}
                    >
                      Read reviews
                    </Text>
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
                marginVertical: 20,
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 17, fontFamily: "ProximaNovaSemiBold" }}
                >
                  {price}
                </Text>
              </View>
              <Count />
            </View>

            <View style={styles.border}>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  fontFamily: "ProximaNovaSemiBold",
                  marginBottom: 3,
                }}
              >
                What is?
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "gray",
                  fontFamily: "ProximaNova",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <CommonButton
                text="Add to Cart"
                screen="Cart"
                rightIcon
                rightIconName="cart-outline"
                rightIconSize={24}
                bgColor="green"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ListDetail;
const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 8,
    borderColor: "gray",
    padding: 10,
  },
});
