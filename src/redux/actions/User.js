import { USER_DATA } from "./Types";

export const addUser = (payload) => (dispatch) => {
  dispatch({
    type: USER_DATA,
    payload,
  });
};
