import { ADD_TO_CART } from "./Types";

export const addToCart = (payload) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload,
  });
};
