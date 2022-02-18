import { USER_DATA } from "../actions/Types";

const initialState = {
  user: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    default:
      return state;
  }
};
export default user;
