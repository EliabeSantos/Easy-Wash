import { addToCart } from "./actions";

const cart = {
  products: [],
  total: 0,
};

export const addToCartThunk = (product) => (dispatch, _) => {
  cart.products = [...cart.products, product];
  cart.total = cart.total + parseFloat(product.price);
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(addToCart(cart));
};

export const resetCartThunk = () => (dispatch, _) => {
  localStorage.removeItem("cart");
  cart.products = [];
  cart.total = 0;
  dispatch(addToCart(cart));
};
