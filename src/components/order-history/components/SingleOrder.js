import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Linking,
} from "react-native";
import Header from "../../header";
import { OrderDetail, DeliveryStatus, OrderCancel } from ".";
import { Avatar } from "react-native-elements";

const SingleOrder = ({ navigation, route }) => {
  const { item, refreshData } = route?.params || {};
  const openDialScreen = () => {
    if (item?.driver_id?.phone_number) {
      let number = "";
      if (Platform.OS === "ios") {
        number = `telprompt:${item?.driver_id?.phone_number}`;
      } else {
        number = `tel:${item?.driver_id?.phone_number}`;
      }
      Linking.openURL(number);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../../assets/images/map.png")}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          <View style={styles.container}>
            <View
              style={{
                position: "absolute",
                top: -35,
                alignSelf: "center",
              }}
            >
              <Avatar
                rounded
                size={70}
                source={{
                  uri:
                    item?.product_id?.image ||
                    "https://cci-research.nl/author/aya-fukami/avatar_hu3c18ec414e2e5615db7090f5d5745dd7_17253_270x270_fill_lanczos_center_2.png",
                }}
                showEditButton
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10,
                marginTop: 45,
              }}
            >
              <Text style={[styles.text, { color: "gray" }]}>Your Shipper</Text>
              <Text
                style={[
                  styles.text,
                  { fontSize: 18, fontFamily: "ProximaNovaBold" },
                ]}
              >
                {item?.driver_id?.name || "To be assigned"}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.text}>Invoice No: </Text>
                <Text style={[styles.text, { color: "red" }]}>{item?.uid}</Text>
              </View>
              <DeliveryStatus item={item} />
              <OrderCancel
                phone={item?.driver_id?.phone_number}
                openDialScreen={openDialScreen}
                refreshData={refreshData}
                item={item}
              />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <OrderDetail navigation={navigation} item={item} />
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
export { SingleOrder };
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: "ProximaNovaSemiBold",
    marginBottom: 3,
    color: "black",
  },
  call: {
    paddingVertical: 10,
    width: "35%",
    backgroundColor: "#60dc6c",
    borderRadius: 25,
  },
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 75,
    position: "relative",
    flex: 1,
  },
});
