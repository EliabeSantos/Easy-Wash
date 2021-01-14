import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { addToCartReducer } from "./modules/cart/reducer";

const reducers = combineReducers({
  cart: addToCartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
