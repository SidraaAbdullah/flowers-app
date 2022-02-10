import React, { useState, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { List, BoxList } from ".";
import { CommonButton } from "../../buttons";
import { Icon } from "react-native-elements";
import { SingleProductDetail } from "../../skeletons/singleProductDetail";

const ListSetting = ({
  navigation,
  products,
  productIsLoading,
  pageNumber,
  setPageNumber,
  data,
  setData,
  refetchProducts,
  productIsFetching,
}) => {
  const [value, setValue] = useState("boxStyle");
  const changeTo = (val) => {
    setValue(val);
  };
  const listColor = value === "listStyle" ? "green" : "black";
  const boxColor = value === "boxStyle" ? "green" : "black";
  const refRBSheet = useRef();
  console.log(data);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 15,
          backgroundColor: "white",
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>List Setting</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => changeTo("boxStyle")}
            style={{ marginRight: 3 }}
          >
            <Icon color={boxColor} name="apps" type="ionicon" size={18} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeTo("listStyle")}>
            <Icon color={listColor} name="list" type="ionicon" />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          onPress={() => refRBSheet.current.open()}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={styles.text}>Filters:</Text>
          <Icon name="options" type="ionicon" />
        </TouchableOpacity> */}
      </View>
      {productIsLoading && !data.length ? (
        <View style={{ width: "50%" }}>
          <SingleProductDetail />
        </View>
      ) : (
        <>
          <FlatList
            data={data || []}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={[
              {
                marginBottom: 20,
                flexGrow: 1,
              },
            ]}
            refreshControl={
              <RefreshControl
                refreshing={!productIsLoading && productIsFetching}
                onRefresh={() => {
                  setData([]);
                  setPageNumber(1);
                  refetchProducts();
                }}
              />
            }
            renderItem={({ item }) => (
              <>
                {value === "boxStyle" ? (
                  <BoxList
                    item={item}
                    key={item?._id}
                    navigation={navigation}
                  />
                ) : value === "listStyle" ? (
                  <List item={item} key={item?._id} navigation={navigation} />
                ) : null}
              </>
            )}
            showsHorizontalScrollIndicator={false}
            bounces={true}
            keyExtractor={(item, index) => index}
            onEndReached={() => {
              if (pageNumber < products?.pagination?.totalPages) {
                if (!productIsLoading) {
                  setPageNumber((prev) => prev + 1);
                }
              }
            }}
            ListEmptyComponent={() =>
              !productIsFetching &&
              !productIsLoading && (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>Sorry no products available</Text>
                </View>
              )
            }
            // ListHeaderComponent={() =>
            //   productIsFetching ? (
            //     <View style={{ width: "50%" }}>
            //       <SingleProductDetail />
            //     </View>
            //   ) : null
            // }
            onEndReachedThreshold={0}
            ListFooterComponent={() =>
              productIsLoading ? (
                <View style={{ width: "50%" }}>
                  <SingleProductDetail />
                </View>
              ) : null
            }
          />
        </>
      )}

      {/* //Bottom Sheet */}

      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={400}
          customStyles={{
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <View style={{ flexGrow: 1, alignItems: "center" }}>
            <View style={{ width: "90%", borderRadius: 5, padding: 10 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Select Delivery Address
              </Text>

              <View style={styles.item}>
                <Text style={styles.text}>Color Selection</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 5,
                  }}
                >
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: "red",
                      borderRadius: 100,
                    }}
                  ></View>
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: "blue",
                      borderRadius: 100,
                    }}
                  ></View>
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: "orange",
                      borderRadius: 100,
                    }}
                  ></View>
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: "black",
                      borderRadius: 100,
                    }}
                  ></View>
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: "gray",
                      borderRadius: 100,
                    }}
                  ></View>
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: "green",
                      borderRadius: 100,
                    }}
                  ></View>
                </View>
              </View>

              <View style={styles.item}>
                <Text style={styles.text}>Flower Selection</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    margin: 5,
                    flexWrap: "wrap",
                  }}
                >
                  <Text style={styles.selection}>Rose</Text>
                  <Text style={styles.selection}>Lilly</Text>
                  <Text style={styles.selection}>Sunflower</Text>
                  <Text style={styles.selection}>Daisy</Text>
                  <Text style={styles.selection}>Iris</Text>
                  <Text style={styles.selection}>Orchid</Text>
                  <Text style={styles.selection}>Buttercup</Text>
                  <Text style={styles.selection}>Tulip</Text>
                  <Text style={styles.selection}>Cactus Flower</Text>
                  <Text style={styles.selection}>Violet</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                width: "80%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
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

const styles = StyleSheet.create({
  text: {
    fontFamily: "ProximaNovaSemiBold",
    fontSize: 18,
    marginBottom: 3,
    marginRight: 3,
  },
  item: {
    marginTop: 15,
    // padding: 5,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
  },
  selection: {
    margin: 5,
    borderStyle: "dashed",
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    color: "gray",
  },
});
