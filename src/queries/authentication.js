import axios from "axios";
import { BASE_URL } from "../constants";

export const SIGN_UP = async (e) => {
  const res = await axios.post(BASE_URL + "/register", e);
  return res.data;
};

export const SIGN_IN = async () => {
  const res = await axios.get(BASE_URL + "/login");
  return res.data;
};
