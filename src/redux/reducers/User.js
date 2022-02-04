import { USER_DATA } from "../actions/Types";

const initialState = {
  user: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        user: { ...action.payload, ...state.user },
      };
    default:
      return state;
  }
};
export default user;
