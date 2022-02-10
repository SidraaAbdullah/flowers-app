import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  RefreshControl,
} from "react-native";
import { Icon } from "react-native-elements";
import Header from "../header";
import { OrderList } from "./components";
import { useQuery } from "react-query";
import { GET_ORDER } from "../../queries";
import { OrderListSkeleton } from "../../components/skeletons/orderListSkeleton";

const OrderHistory = ({ navigation }) => {
  const { height } = Dimensions.get("window");
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [dataRefreshed, setDataRefreshed] = useState(false);

  const {
    data: orderHistory,
    isLoading: orderHistoryLoading,
    isRefetching: orderIsFetching,
    refetch: refetchOrder,
  } = useQuery(
    ["GET_ORDER", { page_no: pageNumber, records_per_page: 10 }],
    GET_ORDER,
    {
      refetchOnWindowFocus: true,
      onSuccess: (res) => {
        if (dataRefreshed) {
          setData(res?.data);
          setDataRefreshed(false);
        } else {
          setData([...data, ...res?.data]);
        }
      },
    }
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header headingText="Order History" />
      <View style={{ flex: 1, paddingTop: 10 }}>
        <View
          style={[styles.container, { marginBottom: 5, paddingHorizontal: 15 }]}
        >
          <Text style={{ fontSize: 18, fontFamily: "ProximaNovaSemiBold" }}>
            My Orders
          </Text>
          {/* <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "ProximaNovaSemiBold",
                marginRight: 3,
              }}
            >
              Filter:
            </Text>
            <Icon name="options" type="ionicon" />
          </TouchableOpacity> */}
        </View>
        <View style={{ padding: 15, flex: 1, height: height }}>
          <FlatList
            data={data || []}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[{ flexGrow: 1 }]}
            renderItem={({ item }) => (
              <OrderList
                item={item}
                status={item?.status}
                navigation={navigation}
                refreshData={async () => {
                  setDataRefreshed(true);
                  if (pageNumber == 1) {
                    await refetchOrder();
                  } else {
                    setPageNumber(1);
                  }
                }}
              />
            )}
            refreshControl={
              <RefreshControl
                refreshing={!orderHistoryLoading && orderIsFetching}
                onRefresh={() => {
                  setDataRefreshed(true);
                  if (pageNumber == 1) {
                    refetchOrder();
                  } else {
                    setPageNumber(1);
                  }
                }}
              />
            }
            keyExtractor={(item, index) => index}
            onEndReached={() => {
              if (pageNumber < orderHistory?.pagination?.totalPages) {
                if (!orderHistoryLoading) {
                  setPageNumber((prev) => prev + 1);
                }
              }
            }}
            // ListHeaderComponent={() =>
            //   orderIsFetching ? <OrderListSkeleton /> : null
            // }
            onEndReachedThreshold={0}
            ListFooterComponent={() =>
              orderIsFetching || orderHistoryLoading ? (
                <OrderListSkeleton />
              ) : null
            }
            ListEmptyComponent={() =>
              !orderHistoryLoading &&
              !orderIsFetching && (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>Sorry no orders available</Text>
                </View>
              )
            }
          />
        </View>
      </View>
    </View>
  );
};
export default OrderHistory;

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
});
