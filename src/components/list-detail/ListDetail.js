import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { customAddCart } from "../../redux/actions/Cart";
import { Count } from "./components";
import { RatingsContainer } from "../category/components/RatingsContainer";

const ListDetail = ({ route, navigation }) => {
  const { item } = route?.params || {};
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (!item?.originalPrice) {
      item.originalPrice = item?.price;
    }
    dispatch(customAddCart({ quantity: count, ...item }));
  };

  return (
    <View style={{ flex: 1 }}>
      <Header headingText={item.name} />
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "white",
            marginVertical: 5,
            marginTop: 20,
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <Image
            source={{
              uri:
                item?.image ||
                "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
            }}
            style={{ width: 110, height: 110 }}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ margin: 15 }}>
            <View style={styles.border}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "ProximaNovaSemiBold",
                  marginBottom: 10,
                }}
              >
                {item?.name}
              </Text>

              <RatingsContainer rating={item?.rating} />
              {/* <TouchableOpacity
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
                </TouchableOpacity> */}
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
                  style={{
                    fontSize: 17,
                    fontFamily: "ProximaNovaSemiBold",
                    color: "#0E5561",
                  }}
                >
                  Rs: {item?.price}
                </Text>
              </View>
              <Count count={count} setCount={setCount} />
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
                {item?.description}
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <CommonButton
                text="Add to Cart"
                screen="Cart"
                rightIcon
                rightIconName="cart-outline"
                rightIconSize={24}
                bgColor="#FF1843"
                onPress={() => handleAddToCart(item)}
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
    borderColor: "lightgray",
    padding: 10,
    alignItems: "center",
  },
});
