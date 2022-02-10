import axios from "axios";
import { BASE_URL } from "../constants";

export const CATEGORY = async (e) => {
  console.log(e);
  const res = await axios.get(BASE_URL + "/category", {
    params: e.queryKey[1],
  });
  return res.data;
};

export const PRODUCT = async (e) => {
  console.log(e);
  const res = await axios.get(BASE_URL + "/product", {
    params: e.queryKey[1],
  });
  return res.data;
};
