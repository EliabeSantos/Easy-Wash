import { ADD_TO_CART } from "./actionType";

export const addToCart = (cart) => ({
  type: ADD_TO_CART,
  cart,
});
