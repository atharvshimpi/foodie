import * as api from "../api/index";
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERRORS,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERRORS,
    LOGOUT
} from "../constants/authConstants";

// LOGIN action
export const login = (userData) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST });

            const { data } = await api.Login(userData);
            
            dispatch({ type: LOGIN_SUCCESS, payload: data });
            localStorage.setItem('user', JSON.stringify(data))
        } catch (error) {
            dispatch({ 
                type: LOGIN_ERRORS, 
                payload: error.response.data
            });
        }
    }
}

// REGISTER action
export const register = (userData) => {
    return async (dispatch) => {
        try {
            dispatch({ type: REGISTER_REQUEST });

            const { data } = await api.Register(userData);

            dispatch({ type: REGISTER_SUCCESS, payload: data });
            
        } catch (error) {
            dispatch({ 
                type: REGISTER_ERRORS, 
                payload: error.response.data
            });
        }
    }
}

// LOGOUT action
export const logout = (history) => {
    return async (dispatch) => {
        dispatch({ type: LOGOUT })
        
        localStorage.removeItem('user');
        history.push('/login');
    }
}

// USER AUTHENTICATION CHECK action
export const isUserAuthenticated = () => {
    return async (dispatch) => {
        const user = JSON.parse(localStorage.getItem('user'));
        try {
            if(user) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: user
                })
            }
        } catch (error) {
            dispatch({
                type: LOGIN_ERRORS,
                payload: error.response.data
            })
        }
    }
}