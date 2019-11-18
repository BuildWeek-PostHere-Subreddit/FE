import axios from "axios";

export const SET_USER_ID = "SET_USER_ID";

export const setUserID = (userID) => dispatch => {
    dispatch({ type: SET_USER_ID, payload: userID });
}

