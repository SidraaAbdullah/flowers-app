import React, { useState, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { List, BoxList } from ".";
import { CommonButton } from "../../buttons";
import { Icon } from "react-native-elements";

const ListSetting = ({ navigation }) => {
  const [value, setValue] = useState("boxStyle");
  const changeTo = (val) => {
    setValue(val);
  };
  const listColor = value === "listStyle" ? "green" : "black";
  const boxColor = value === "boxStyle" ? "green" : "black";
  const flowerList = [
    {
      id: "1",
      name: "Flower Store",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "27min . Deleivery",
      price: "5$",
    },
    {
      id: "2",
      name: "Flower Shop",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "20min . Deleivery",
      price: "20$",
    },
    {
      id: "3",
      name: "Flower Store",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "30min . Deleivery",
      price: "30$",
    },
    {
      id: "4",
      name: "Flower Shop",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "40min . Deleivery",
      price: "10$",
    },
    {
      id: "5",
      name: "Flower Shop",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "20min . Deleivery",
      price: "20$",
    },
    {
      id: "6",
      name: "Flower Store",
      place: "Loreum ipsum dolor sit amet, consectetur non adipiscing elit.",
      delivery: "30min . Deleivery",
      price: "30$",
    },
  ];

  const refRBSheet = useRef();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 15,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            List Setting:
          </Text>
          <TouchableOpacity
            onPress={() => changeTo("boxStyle")}
            style={{ marginHorizontal: 3, marginTop: 3 }}
          >
            <Icon color={boxColor} name="apps" type="ionicon" size={18} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 3 }}
            onPress={() => changeTo("listStyle")}
          >
            <Icon color={listColor} name="list" type="ionicon" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text onPress={() => refRBSheet.current.open()} style={{ fontSize: 16, fontWeight: "bold" }}>Price:</Text>
          <Text >
            <Icon name="" type="" />
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: 10,
            marginRight: 2,
            marginTop: 10,
          }}
        >
          {value === "boxStyle"
            ? flowerList.map((list, index) => (
              <BoxList item={list} key={index} navigation={navigation} />
            ))
            : value === "listStyle"
              ? flowerList.map((list, index) => (
                <List item={list} key={index} navigation={navigation} />
              ))
              : null}
        </View>
        <View style={{ marginHorizontal: 40, marginBottom: 15 }}>
          <CommonButton bgColor="green" text="Load More" />
        </View>
      </ScrollView>

      {/* //Bottom Sheet */}

      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={400}
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
                <Text style={style.text}>Color Selection</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                  <View style={{ height: 30, width: 30, backgroundColor: 'red', borderRadius: 100 }}></View>
                  <View style={{ height: 30, width: 30, backgroundColor: 'blue', borderRadius: 100 }}></View>
                  <View style={{ height: 30, width: 30, backgroundColor: 'orange', borderRadius: 100 }}></View>
                  <View style={{ height: 30, width: 30, backgroundColor: 'black', borderRadius: 100 }}></View>
                  <View style={{ height: 30, width: 30, backgroundColor: 'gray', borderRadius: 100 }}></View>
                  <View style={{ height: 30, width: 30, backgroundColor: 'green', borderRadius: 100 }}></View>
                </View>
              </View>

              <View style={style.item}>
                <Text style={style.text}>Flower Selection</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', margin: 5, flexWrap: 'wrap' }}>

                  <Text style={style.selection}>Rose</Text>
                  <Text style={style.selection}>Lilly</Text>
                  <Text style={style.selection}>Sunflower</Text>
                  <Text style={style.selection}>Daisy</Text>
                  <Text style={style.selection}>Iris</Text>
                  <Text style={style.selection}>Orchid</Text>
                  <Text style={style.selection}>Buttercup</Text>
                  <Text style={style.selection}>Tulip</Text>
                  <Text style={style.selection}>Cactus Flower</Text>
                  <Text style={style.selection}>Violet</Text>

                </View>
              </View>

            </View>

            <View style={{ width: "80%", flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: "45%" }}>
                <CommonButton text="Reset" />
              </View>
              <View style={{ width: "45%" }}>
                <CommonButton text="Apply" />
              </View>
            </View>

          </View>
        </RBSheet>
      </View>

    </View>
  );
};
export { ListSetting };


const style = StyleSheet.create({
  item: {
      marginTop: 15,
      // padding: 5,
      borderTopColor: "lightgray",
      borderTopWidth: 1,
  },
  text: {
      fontSize: 20,
      margin:5,

  },
  selection: {
      margin:5,
      borderStyle: "dashed",
      borderColor: "lightgray",
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontSize:16,
      color:'gray'
  }
});