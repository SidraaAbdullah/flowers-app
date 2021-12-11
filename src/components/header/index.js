import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const Header = (props) => {
  return (
    <View
      style={{
        overflow: "hidden",
        width: "100%",
        zIndex: 100,
        backgroundColor: "white",
        position: "relative",
        elevation: 0,
        shadowOpacity: 0,
        shadowRadius: 0,
        marginTop: 20,
        height: 80,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
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
          {props.headingText !== "" ? (
            <Text
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              {props?.headingText}
            </Text>
          ) : null}
        </View>

        <TouchableOpacity>
          <View style={styles.rightIcon}>
            <Icon name="menu" size={30} color="black" type="ionicon" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  leftIcon: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginTop:2
  },
  rightIcon: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 22,
  },
});
