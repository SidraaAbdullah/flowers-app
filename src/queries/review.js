import axios from "axios";
import { BASE_URL } from "../constants";

export const ADD_REVIEW = async (e) => {
  const { id, ...rest } = e;
  const res = await axios.put(BASE_URL + `/order-rating/${id}`, rest);
  return res.data;
};
