import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionType";

export const addToCartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return action.cart;
    case REMOVE_FROM_CART:
      return action.cart;
    default:
      return state;
  }
};
