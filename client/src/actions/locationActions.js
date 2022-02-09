import {
    SET_LOCATION,
} from "../constants/actionTypes";

// SET LOCATION TO LOCAL STORAGE action
export const setLocation = (area) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOCATION });

        localStorage.setItem('location', JSON.stringify(area));
    }
}