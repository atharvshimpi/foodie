import * as api from "../api/index";
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

// ADD TO CART action
export const addToCart = (restId, id, quantity, history) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: ADD_TO_CART_REQUEST });
            
            const { data } = await api.AddToCart(restId, id);

            dispatch({ 
                type: ADD_TO_CART_SUCCESS, 
                payload: { 
                    _id: data._id, 
                    title: data.title, 
                    veg: data.veg,
                    description: data.description, 
                    cost: data.cost,
                    foodImage: data.foodImage,
                    parentRestaurant: data.parentRestaurant,
                    quantity 
                } 
            });

            // set/update the payload to localStorage
            localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
            // redirect to cart upon addition of an item
            history.push('/cart');
        } catch (error) {
            dispatch({ 
                type: ADD_TO_CART_ERRORS, 
                payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message
            });
        }
    }
}

// DELETE ITEMS FROM CART action
export const deleteFromCart = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: DELETE_FROM_CART_REQUEST });

            dispatch({ type: DELETE_FROM_CART_SUCCESS, payload: id });

            // update the local storage upon removal of items
            localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
        } catch (error) {
            dispatch({ 
                type: DELETE_FROM_CART_ERRORS, 
                payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message
            });
        }
    }
}

// SAVE ADDRESS TO LOCAL STORAGE action
export const saveAddressToCart = (addressData) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SAVE_ADDRESS_TO_CART, payload: addressData });

            localStorage.setItem('address', JSON.stringify(addressData));
        } catch (error) {
            console.log(error)
        }
    }
}

// SAVE PAYMENT METHOD TO LOCAL STORAGE action
export const savePaymentMethodToCart = (paymentData) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SAVE_PAYMENT_METHOD_TO_CART, payload: paymentData });

            localStorage.setItem('payment', JSON.stringify(paymentData));
        } catch (error) {
            console.log(error)
        }
    }
}