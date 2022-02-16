import {
  ADD_TO_CART,
  INCREASE_CART,
  DECREASE_CART,
  DELETE_CART,
  RESET_CART,
} from "./Types";

export const addToCart = (payload) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload,
  });
};

export const IncreaseCart = (payload) => (dispatch) => {
  dispatch({
    type: INCREASE_CART,
    payload,
  });
};

export const DecreaseCart = (payload) => (dispatch) => {
  dispatch({
    type: DECREASE_CART,
    payload,
  });
};

export const DeleteFromCart = (payload) => (dispatch) => {
  dispatch({
    type: DELETE_CART,
    payload,
  });
};
export const resetCart = (payload) => (dispatch) => {
  dispatch({
    type: RESET_CART,
  });
};
