import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Icon, Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Header = (props) => {
  const navigation = useNavigation();
  const cartItemCount = useSelector((state) => state.cart.addToCart);

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            props.screen
              ? navigation.navigate(props.screen)
              : navigation.goBack(null);
          }}
        >
          <View style={styles.leftIcon}>
            <Icon
              name="arrow-back-outline"
              size={30}
              color="black"
              type="ionicon"
            />
          </View>
        </TouchableOpacity>

        <View>
          {props.headingText ? (
            <Text style={styles.text}>{props?.headingText}</Text>
          ) : props.dropdownText ? (
            <TouchableOpacity
              style={{
                alignItems: "center",
                flexDirection: "row",
                marginLeft: 12,
              }}
              onPress={props.onPress}
            >
              <Text style={[styles.text, { marginRight: 2 }]}>
                {props?.dropdownText}
              </Text>
              <Icon name="chevron-down-outline" type="ionicon" color="black" />
            </TouchableOpacity>
          ) : null}
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <View style={styles.rightIcon}>
            <Icon name="cart" size={28} color="black" type="ionicon" />
            <Badge
              status="error"
              value={cartItemCount?.length}
              containerStyle={{ position: "absolute", top: 10, right: 5 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    overflow: "hidden",
    width: "100%",
    zIndex: 100,
    backgroundColor: "white",
    position: "relative",
    shadowOpacity: 0,
    shadowRadius: 0,
    paddingTop: 20,
    height: 80,
    elevation: 1,
  },
  leftIcon: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  rightIcon: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 22,
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    fontFamily: "ProximaNovaSemiBold",
    textTransform: "capitalize",
  },
});
