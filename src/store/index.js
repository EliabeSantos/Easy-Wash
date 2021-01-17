import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { addToCartReducer } from "./modules/cart/reducer";
import { laundriesReducer } from "./modules/laundries/reducer";

const reducers = combineReducers({
  cart: addToCartReducer,
  laundries: laundriesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
