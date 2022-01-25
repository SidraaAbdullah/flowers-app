import { ADD_TO_CART } from "../actions/Types";

const initialState = {
  addToCart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: [action.payload, ...state.addToCart],
      };
    default:
      return state;
  }
};
export default cart;