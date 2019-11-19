import { SET_USER_ID } from '../actions';

const initialState = {
    userID: 0,
    error: null,
    isGetting: false,
    savedList: [],
    postSubmission: {},
    postResult: {}
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_ID:
            return {
                ...state,
                userID: action.payload
            };
        default:
            return state;
    }
}

export default reducer;