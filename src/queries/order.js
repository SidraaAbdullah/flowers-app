import axios from "axios";
import { BASE_URL } from "../constants";

export const ADD_ORDER = async (e) => {
  const res = await axios.post(BASE_URL + "/order", e);
  return res.data;
};

export const CANCEL_ORDER = async (e) => {
  const { id, status } = e;
  const res = await axios.put(BASE_URL + `/order-status/${id}`, { status });
  return res.data;
};

export const GET_ORDER = async (e) => {
  const res = await axios.get(BASE_URL + "/order", {
    params: e.queryKey[1],
  });
  return res.data;
};
