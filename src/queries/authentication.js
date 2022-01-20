import axios from "axios";
import { BASE_URL } from "../constants";

export const SIGN_UP = async (e) => {
  const res = await axios.post(BASE_URL + "/register", e);
  return res.data;
};

export const SIGN_IN = async (e) => {
  const res = await axios.post(BASE_URL + "/login", e);
  return res.data;
};
