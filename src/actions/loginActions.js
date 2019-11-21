import axios from "axios";

export const SET_USER_ID = "SET_USER_ID";
export const ID_FETCH = 'ID_FETCH';
export const ID_SUCCESS = 'ID_SUCCESS';
export const ID_FAILURE = 'ID_FAILURE';

// export const setUserID = (userID) => dispatch => {
//     dispatch({ type: SET_USER_ID, payload: userID });
// }



export const setUserID = (credentials, props) => dispatch => {
  console.log(`log Action`, credentials)
  console.log("props", props)
  // action objects
  // from thunk (see below) do some async action and dispatch an error or success action
  return axios
    .post('https://backend-posthere-russ-and-mack.herokuapp.com/users/login', credentials)
    .then(res => {
      console.log(res.data.id)
      dispatch({ type: ID_SUCCESS, payload: res.data.id })
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id)
      // redirect to the apps main page?
    })
    .catch(err => dispatch({ type: ID_FAILURE, payload: err }));
};