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

const initialState = {
    loading: false,
    foodDetails: [],
    foodByRestaurant: [],
    searchEntity: [],
    error: []
};

const foodReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FOOD_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_FOOD_SUCCESS:
            return {
                ...state,
                loading: false,
                foodDetails: action.payload
            };

        case FETCH_FOOD_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case FETCH_FOOD_BY_RESTAURANT_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_FOOD_BY_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                foodByRestaurant: action.payload
            };

        case FETCH_FOOD_BY_RESTAURANT_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case FETCH_ENTITY_BY_SEARCH_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_ENTITY_BY_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                searchEntity: action.payload
            };

        case FETCH_ENTITY_BY_SEARCH_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

export default foodReducer;