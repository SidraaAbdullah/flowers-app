import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";

const OrderList = ({ status }) => {
  return (
    <View style={styles.border}>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "30%" }}>
          <Image
            style={{ width: 80, height: 80 }}
            source={{
              uri: "https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg",
            }}
          />
        </View>
        <View style={{ width: "70%" }}>
          <View style={[styles.container, { marginBottom: 3 }]}>
            <Text style={styles.font}>Rose (2 items)</Text>
            <Text style={styles.font}>$40.00</Text>
          </View>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "ProximaNova",
              fontSize: 14,
              color: "gray",
            }}
          >
            Loreum ipsum dolor sit amet, consectetur non adipiscing elit.
          </Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginVertical: 3,
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontFamily: "ProximaNova",
                color: "gray",
                marginRight: 3,
              }}
            >
              Invoice No:
            </Text>
            <Text style={{ fontFamily: "ProximaNova", color: "red" }}>
              39303030
            </Text>
          </View>
          <View style={styles.container}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Icon name="calendar-outline" size={18} type="ionicon" />
              <Text
                style={{
                  fontFamily: "ProximaNova",
                  marginLeft: 5,
                  marginTop: 2,
                }}
              >
                27 May
              </Text>
            </View>

            <Text
              style={{
                fontFamily: "ProximaNovaBold",
                marginTop: 2,
                color: "green",
                fontSize: 16,
              }}
            >
              {status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export { OrderList };
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    paddingLeft: 15,
    textAlign: "center",
    fontFamily: "ProximaNova",
  },
  font: {
    fontSize: 16,
    fontFamily: "ProximaNovaSemiBold",
  },
  border: {
    borderWidth: 1,
    justifyContent: "center",
    borderStyle: "dashed",
    borderRadius: 8,
    borderColor: "gray",
    backgroundColor: "white",
    marginBottom: 8,
  },
});
