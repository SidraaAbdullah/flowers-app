import axios from "axios";
import { BASE_URL } from "../constants";

export const ADD_ADDRESS = async (e) => {
  const res = await axios.post(BASE_URL + "/user/delivery-address", e);
  return res.data;
};

export const UPDATE_PRIMARY_ADDRESS = async (e) => {
  const res = await axios.patch(BASE_URL + "/user/delivery-address", e);
  return res.data;
};
