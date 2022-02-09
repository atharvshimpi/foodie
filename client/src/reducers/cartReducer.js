import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_ERRORS,
    DELETE_FROM_CART_REQUEST,
    DELETE_FROM_CART_SUCCESS,
    DELETE_FROM_CART_ERRORS,
    SAVE_ADDRESS_TO_CART,
    SAVE_PAYMENT_METHOD_TO_CART
} from "../constants/actionTypes";

const initialState = {
    loading: false,
    cartItems: [],
    error: []
};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading: true
            };

        case ADD_TO_CART_SUCCESS:
            const item = action.payload;
            const existItem = state.cartItems.find(ci => ci._id === item._id)
            if(existItem) {
                return {
                    ...state,
                    loading: false,
                    cartItems: state.cartItems.map(ci => ci._id === existItem._id ? item : ci)
                };
            } else {
                return {
                    ...state,
                    loading: false,
                    cartItems: [...state.cartItems, item]
                };
            }

        case ADD_TO_CART_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case DELETE_FROM_CART_REQUEST:
            return {
                ...state,
                loading: true
            };

        case DELETE_FROM_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.filter(ci => ci._id !== action.payload)
            };

        case DELETE_FROM_CART_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case SAVE_ADDRESS_TO_CART:
            return {
                ...state,
                deliveryAddress: action.payload
            }

        case SAVE_PAYMENT_METHOD_TO_CART:
            return {
                ...state,
                paymentMethod: action.payload
            }

        default:
            return state;
    }
}

export default cartReducer;