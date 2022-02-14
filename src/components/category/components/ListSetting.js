import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { List, BoxList } from ".";
import { Icon } from "react-native-elements";
import { SingleProductDetail } from "../../skeletons/singleProductDetail";
import LottieView from "lottie-react-native";
import sorry from "../../../assets/images/sorry.json";

const ListSetting = ({
  navigation,
  products,
  productIsLoading,
  pageNumber,
  setQuery,
  data,
  setData,
  refetchProducts,
  productIsFetching,
  setDataRefreshed,
}) => {
  const [value, setValue] = useState("boxStyle");
  const changeTo = (val) => {
    setValue(val);
  };
  const listColor = value === "listStyle" ? "red" : "black";
  const boxColor = value === "boxStyle" ? "red" : "black";
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
      </View>
      {productIsLoading && !data?.length ? (
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
                refreshing={productIsLoading || productIsFetching}
                onRefresh={() => {
                  setDataRefreshed(true);
                  if (pageNumber == 1) {
                    refetchProducts();
                  } else {
                    setQuery((prev) => {
                      return { page_no: 1, search: prev?.search };
                    });
                  }
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
                  setQuery((prev) => {
                    return { page_no: prev.page_no + 1, search: prev?.search };
                  });
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
                  <LottieView
                    style={{ width: 250, height: 200 }}
                    source={sorry}
                    autoPlay
                    loop={true}
                    speed={1}
                  />

                  <Text style={styles.label}>Sorry No Products available</Text>
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
  label: {
    fontFamily: "ProximaNovaSemiBold",
    fontSize: 18,
    marginTop: 5,
    color: "red",
  },
});
