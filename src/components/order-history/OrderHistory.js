import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import Header from "../header";
const OrderHistory = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="Order History" />
      <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 15 }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 3 }}>Filter</Text>
          <Icon name="options" type="ionicon" />
        </View>
        <ScrollView>
          <View style={{ marginVertical: 15 }}>
            <View
              style={{
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: "gray",
                borderRadius: 10,
              }}
            >
                <View>
                    <View>
                        
                    </View>
                </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default OrderHistory;
