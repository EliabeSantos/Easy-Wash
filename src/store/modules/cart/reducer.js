import { ADD_TO_CART } from "./actionType";

export const addToCartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return action.cart;
    default:
      return state;
  }
};
