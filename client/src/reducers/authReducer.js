import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERRORS,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERRORS,
    LOGOUT
} from "../constants/authConstants";

const initialState = {
    loading: false,
    isAuthenticated: false,
    success: false,
    error: []
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }

        case LOGIN_ERRORS:
            return action.payload;

        case LOGOUT: 
            return {
                ...initialState
            }

        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                registerInfo: action.payload
            }

        case REGISTER_ERRORS:
            return action.payload;

        default: 
            return state;
    }
}

export default authReducer;