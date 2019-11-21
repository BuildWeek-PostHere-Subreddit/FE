import axios from "axios";

export const POST_SEND = "POST_SEND";
export const RESULTS_FETCH = "RESULTS_FETCH";
export const RESULTS_SUCCESS = "RESULTS_SUCCESS";
export const RESULTS_FAILED = "RESULTS_FAILED";

// export const postSend = (data) => ({
//     type: POST_SEND,
//     payload: data
// })

// export const resultsFetch = () => ({
//     type: RESULTS_FETCH,
// })

// export const resultsSucess = (results) => ({
//     type: RESULTS_SUCCESS,
//     payload: results
// })

export const submitPost = (data) => dispatch => {

    console.log(data)

    axios
        .post("https://davidanagy-posthere-flask.herokuapp.com/subreddit", data)
        .then(response => {
            console.log("results from DS", response.data);
            dispatch({ type: RESULTS_SUCCESS, payload: response.data })
            // props.history.push('/results');
        })
        .catch(error => console.log(error.response));


}

export const saveResults = (data) => dispatch => {
    axios
        .post("https://backend-posthere-russ-and-mack.herokuapp.com/post/new", data)
        .then(response => {
            console.log("saveResults", response)
        })
}