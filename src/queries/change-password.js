import axios from "axios";
import { BASE_URL } from "../constants";

export const CHANGE_PASSWORD = async (e) => {
  const res = await axios.put(BASE_URL + "/change-password", e);
  return res.data;
};
