import {
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_ERRORS,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_ERRORS,
    FETCH_MY_ORDERS_REQUEST,
    FETCH_MY_ORDERS_SUCCESS,
    FETCH_MY_ORDERS_ERRORS
} from "../constants/orderConstants";

const orderReducer = (state = { myOrders: [], orderDetails: [] }, action) => {
    switch(action.type) {
        case PLACE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case PLACE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                order: action.payload,
                orderDetails: action.payload
            }

        case PLACE_ORDER_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                orderDetails: action.payload
            }

        case ORDER_DETAILS_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case FETCH_MY_ORDERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_MY_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                myOrders: action.payload
            }

        case FETCH_MY_ORDERS_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default orderReducer;