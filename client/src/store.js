import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers"

const userFromStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const deliveryAddressFromStorage = localStorage.getItem("address") ? JSON.parse(localStorage.getItem("address")) : {};

const initialState = {
    cart: { cartItems: cartItemsFromStorage, deliveryAddress: deliveryAddressFromStorage },
    auth: { user: userFromStorage }
};
const middleWare = [thunk]; 
const store = createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;