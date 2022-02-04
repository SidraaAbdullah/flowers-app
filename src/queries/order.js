import axios from "axios";
import { BASE_URL } from "../constants";

export const ADD_ORDER = async (e) => {
  const res = await axios.post(BASE_URL + "/order", e);
  return res.data;
};
