import React, { useRef } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import Header from "../../components/header";
import { CategoryBox } from "./components/CategoryBox";
import { CategoryHeader } from "./components/CategoryHeader";
import { Icon } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import { CommonButton } from "../buttons";
import { Button } from "react-native-elements/dist/buttons/Button";

const Category = ({ navigation }) => {
  const refRBSheet = useRef();
  return (
    <View>
      <Header headingText="Current Location" />
      <TouchableOpacity
        style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}
        onPress={() => navigation.navigate("categoryDetail")}
      >
        <CategoryHeader headingText="Discover Plant & Flower" address="R306 Sharifabd FB Area Block 1 Karachi" />

        <CategoryBox name="Flowers" type="All Category" url="https://bakeryonline.pk/wp-content/uploads/2020/08/bouquet-of-1-dozen-roses.jpg"/>
        <CategoryBox name="Plants" type="Indoor" />
        <CategoryBox name="Plants" type="outdorr" />
        <CategoryBox name="Pots" type="All Types" />
        <CategoryBox name="Accessories" type="supplements" />
        {/* <Text onPress={() => refRBSheet.current.open()} >hhgghgg</Text> */}
        <View>
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height={230}
            customStyles={{
              draggableIcon: {
                backgroundColor: "#000"
              },
            }}

          >
            <View style={{ flexGrow: 1, alignItems: 'center', }}>

              <View style={{ width: "90%", borderRadius: 5, padding: 10 }}>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Select Delivery Address</Text>
                <View style={style.item}>
                  <Icon name="add" size={30} color="black" type="ionicon" />
                  <Text style={style.text}>Current Location</Text>
                </View>
                <View style={style.item}>
                  <Icon name="add" size={30} color="black" type="ionicon" />
                  <Text style={style.text}>Add an Address</Text>
                </View>
              </View>

              <View style={{ width: "90%" }}>
                <CommonButton text="Cancel" />
              </View>
            </View>
          </RBSheet>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Category;

const style = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    margin: 3,
    padding: 5,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
  },
  text: {
    paddingLeft: 10,
    fontSize: 18,
  }
});
