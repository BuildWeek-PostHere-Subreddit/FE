import { SAVED_LIST_FETCH, SAVED_LIST_SUCCESS, SAVED_LIST_FAILED } from '../actions/savedListActions';

const initialState = {
    savedList: [],
    isFetching: true,
    error: ""
}

function savedListReducer(state = initialState, action) {
    switch (action.payload) {
        case SAVED_LIST_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case SAVED_LIST_SUCCESS:
            return {
                ...state,
                savedList: action.payload,
                isFetching: false,
                error: ""
            };
        case SAVED_LIST_FAILED:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
}

export default savedListReducer;