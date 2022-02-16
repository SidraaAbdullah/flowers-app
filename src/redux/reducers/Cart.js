import {
  ADD_TO_CART,
  INCREASE_CART,
  DECREASE_CART,
  DELETE_CART,
  RESET_CART,
  CUSTOM_ADD_CART,
} from "../actions/Types";

const initialState = {
  addToCart: [],
};

const cart = (state = initialState, action) => {
  const index = state.addToCart.findIndex(
    (item) => item._id === action.payload?._id
  );
  const newCart = [...state.addToCart];

  switch (action.type) {
    case ADD_TO_CART:
      if (index >= 0) {
        newCart[index].price =
          newCart[index].originalPrice * (newCart[index].quantity + 1);
        newCart[index].quantity = newCart[index].quantity + 1;

        return {
          ...state,
          addToCart: newCart,
        };
      } else {
        return {
          ...state,
          addToCart: [...state.addToCart, { quantity: 1, ...action.payload }],
        };
      }
    case INCREASE_CART:
      newCart[index].price =
        newCart[index].originalPrice * (newCart[index].quantity + 1);
      newCart[index].quantity = newCart[index].quantity + 1;

      return {
        ...state,
        addToCart: newCart,
      };
    case CUSTOM_ADD_CART:
      if (index >= 0) {
        newCart[index].price =
          newCart[index].originalPrice * action?.payload?.quantity;
        newCart[index].quantity = action?.payload?.quantity;
        return {
          ...state,
          addToCart: newCart,
        };
      } else {
        return {
          ...state,
          addToCart: [...state.addToCart, { quantity: 1, ...action.payload }],
        };
      }
    case DECREASE_CART:
      newCart[index].price =
        newCart[index].originalPrice * (newCart[index].quantity - 1);
      newCart[index].quantity = newCart[index].quantity - 1;

      return {
        ...state,
        addToCart: newCart,
      };
    case DELETE_CART:
      const filteredCart = state.addToCart.filter(
        (item) => item._id != action?.payload?._id
      );
      return {
        ...state,
        addToCart: filteredCart,
      };
    case RESET_CART:
      return {
        ...state,
        addToCart: [],
      };
    default:
      return state;
  }
};
export default cart;
