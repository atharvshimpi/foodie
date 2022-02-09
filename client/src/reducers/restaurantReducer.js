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

const initialState = {
    loading: false,
    restaurantDetails: [],
    restaurants: [],
    error: []
};

const restaurantReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_RESTAURANT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurantDetails: action.payload
            };

        case FETCH_RESTAURANT_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case FETCH_RESTAURANTS_BY_LOCATION_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_RESTAURANTS_BY_LOCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload
            };

        case FETCH_RESTAURANTS_BY_LOCATION_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case FETCH_ALL_RESTAURANTS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_ALL_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload
            };

        case FETCH_ALL_RESTAURANTS_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

export default restaurantReducer;