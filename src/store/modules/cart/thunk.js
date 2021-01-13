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
