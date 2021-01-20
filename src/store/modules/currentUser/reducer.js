import { GET_USER } from "./actionType";

const user = {};

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...action.user };
    default:
      return state;
  }
};
