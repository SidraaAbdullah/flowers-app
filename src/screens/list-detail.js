import React from "react";
import DetailList from "../components/list-detail";

const ListDetailScreen = ({ route, navigation }) => {
  return <DetailList route={route} navigation={navigation} />;
};

export { ListDetailScreen };
