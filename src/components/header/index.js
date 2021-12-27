import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { style } from "../input/style";

const Header = (props) => {
  const navigation = useNavigation();
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
          {props.headingText && (
            <Text style={styles.text}>{props?.headingText}</Text>
          )}
        </View>

        <TouchableOpacity>
          <View style={styles.rightIcon}>
            <Icon
              name={props.rightIcon || "menu"}
              size={props.rightSize || 28}
              color={props.rightColor || "black"}
              type={props.rightType || "ionicon"}
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
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    paddingTop: 20,
    height: 80,
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
  },
});
