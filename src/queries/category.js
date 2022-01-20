import axios from "axios";
import { BASE_URL } from "../constants";

export const CATEGORY = async () => {
  const res = await axios.get(BASE_URL + "/category");
  return res.data;
};

export const PRODUCT = async () => {
  const res = await axios.get(BASE_URL + "/product");
  return res.data;
};
