import React from "react";
import { CategoryDetail } from "../components/category/components";

const DetailCategoryScreen = ({ navigation, route }) => {
  return <CategoryDetail navigation={navigation} route={route} />;
};
export { DetailCategoryScreen };
