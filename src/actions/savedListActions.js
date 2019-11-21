import axios from "axios";

export const SAVED_LIST_FETCH = "SAVED_LIST_FETCH";
export const SAVED_LIST_SUCCESS = "SAVED_LIST_SUCCESS";
export const SAVED_LIST_FAILED = "SAVED_LIST_FAILED";

export const retrieveSavedList = (data) => dispatch => {
    axios
        //need the endpoint and need to verify if response.data is the right object
        .get("https://backend-posthere-russ-and-mack.herokuapp.com/post")
        .then(response => {
            console.log("saved list response", response)
            // dispatch({ type: SAVED_LIST_SUCCESS, payload: response.data })
        })
}