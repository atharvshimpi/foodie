import { combineReducers } from "redux";

import restaurantReducer from "./restaurantReducer";
import foodReducer from "./foodReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({ 
    restaurant: restaurantReducer, 
    food: foodReducer, 
    cart: cartReducer,
    order: orderReducer,
    auth: authReducer
});

export default rootReducer;