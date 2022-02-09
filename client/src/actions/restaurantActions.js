import * as api from "../api/index";
import {
    FETCH_RESTAURANT_REQUEST,
    FETCH_RESTAURANT_SUCCESS,
    FETCH_RESTAURANT_ERRORS,
    FETCH_RESTAURANTS_BY_LOCATION_REQUEST,
    FETCH_RESTAURANTS_BY_LOCATION_SUCCESS,
    FETCH_RESTAURANTS_BY_LOCATION_ERRORS,
    FETCH_ALL_RESTAURANTS_REQUEST,
    FETCH_ALL_RESTAURANTS_SUCCESS,
    FETCH_ALL_RESTAURANTS_ERRORS
} from "../constants/actionTypes";

// FETCH RESTAURANT BY ID action
export const fetchRestaurant = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_RESTAURANT_REQUEST });

            const { data } = await api.FetchRestaurant(id);

            dispatch({ type: FETCH_RESTAURANT_SUCCESS, payload: data });
            
        } catch (error) {
            dispatch({ 
                type: FETCH_RESTAURANT_ERRORS, 
                payload: error.response && error.response.data.message ? 
                error.response.data.message :  error.message
            });
        }
    }
}

// FETCH RESTAURANT BY LOCATION action
export const fetchRestaurantsByLocation = (area) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_RESTAURANTS_BY_LOCATION_REQUEST });

            const { data } = await api.FetchRestaurantsByLocation(area);

            dispatch({ type: FETCH_RESTAURANTS_BY_LOCATION_SUCCESS, payload: data });
            
        } catch (error) {
            dispatch({ 
                type: FETCH_RESTAURANTS_BY_LOCATION_ERRORS, 
                payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message
            });
        }
    }
}

// FETCH ALL RESTAURANTS action
export const fetchAllRestaurants = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_ALL_RESTAURANTS_REQUEST });

            const { data } = await api.FetchAllRestaurants();

            dispatch({ type: FETCH_ALL_RESTAURANTS_SUCCESS, payload: data });
            
        } catch (error) {
            dispatch({ 
                type: FETCH_ALL_RESTAURANTS_ERRORS, 
                payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message
            });
        }
    }
}