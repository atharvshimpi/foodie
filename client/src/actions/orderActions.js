import * as api from "../api/index";
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

// PLACE ORDER action
export const placeOrder = (order) => {
    return async (dispatch) => {
        try {
            dispatch({ type: PLACE_ORDER_REQUEST });

            const { data } = await api.PlaceOrder(order);

            // after placing order, empty the localstorage, except for USER and LOCATION!
            localStorage.removeItem('cartItems');
            localStorage.removeItem('address');
            localStorage.removeItem('payment');

            dispatch({ type: PLACE_ORDER_SUCCESS, payload: data });
            
        } catch (error) {
            dispatch({ 
                type: PLACE_ORDER_ERRORS, 
                payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message
            });
        }
    }
}

// FETCH ORDER BY ID action
export const fetchOrderById = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ORDER_DETAILS_REQUEST });

            const { data } = await api.FetchOrderById(id);

            dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
            
        } catch (error) {
            dispatch({ 
                type: ORDER_DETAILS_ERRORS, 
                payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message
            });
        }
    }
}

// FETCH USER ORDERS action 
export const fetchMyOrders = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_MY_ORDERS_REQUEST });

            const { data } = await api.FetchMyOrders();

            dispatch({ type: FETCH_MY_ORDERS_SUCCESS, payload: data });
            
        } catch (error) {
            dispatch({ 
                type: FETCH_MY_ORDERS_ERRORS, 
                payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message
            });
        }
    }
}