import * as api from "../api/index";
import {
    FETCH_FOOD_REQUEST,
    FETCH_FOOD_SUCCESS,
    FETCH_FOOD_ERRORS,
    FETCH_FOOD_BY_RESTAURANT_REQUEST,
    FETCH_FOOD_BY_RESTAURANT_SUCCESS,
    FETCH_FOOD_BY_RESTAURANT_ERRORS,
    FETCH_ENTITY_BY_SEARCH_REQUEST,
    FETCH_ENTITY_BY_SEARCH_SUCCESS,
    FETCH_ENTITY_BY_SEARCH_ERRORS
} from "../constants/actionTypes";

// FETCH FOOD DETAILS action
export const fetchFood = (restId, id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_FOOD_REQUEST });

            const { data } = await api.FetchFood(restId, id);

            dispatch({ type: FETCH_FOOD_SUCCESS, payload: data });
            
        } catch (error) {
            dispatch({ 
                type: FETCH_FOOD_ERRORS, 
                payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message
            });
        }
    }
}

// FETCH FOOD BY RESTAURANT action
export const fetchFoodByRestaurant = (restId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_FOOD_BY_RESTAURANT_REQUEST });

            const { data } = await api.FetchFoodByRestaurant(restId);

            dispatch({ type: FETCH_FOOD_BY_RESTAURANT_SUCCESS, payload: data });
            
        } catch (error) {
            dispatch({ 
                type: FETCH_FOOD_BY_RESTAURANT_ERRORS,
                payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message
            });
        }
    }
}

// FETCH ENTITY BY SEARCH action
export const fetchEntityBySearch = (searchQuery) => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_ENTITY_BY_SEARCH_REQUEST });

            const { data } = await api.FetchEntityBySearch(searchQuery);
            localStorage.setItem('searchEntity', JSON.stringify(data));
            dispatch({ type: FETCH_ENTITY_BY_SEARCH_SUCCESS, payload: data });
            
        } catch (error) {
            dispatch({ 
                type: FETCH_ENTITY_BY_SEARCH_ERRORS,
                payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message
            });
        }
    }
}