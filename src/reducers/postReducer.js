import { POST_SEND, RESULTS_FETCH, RESULTS_SUCCESS, RESULTS_FAILED } from '../actions/postFormActions';

const inititalState = {
    post: [],
    results: [],
    isFetching: true,
    error: ""
}

function postReducer(state = inititalState, action) {
    switch (action.type) {
        case POST_SEND:
            return {
                ...state,
                title: action.payload,
                text: action.payload,
                link: action.payload,
                isFetching: false,
                error: ""
            };
        case RESULTS_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case RESULTS_SUCCESS:
                console.log(action.payload);
            return {
                ...state,
                results: action.payload,
                isFetching: false,
                error: ""
            };
        case RESULTS_FAILED:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
    
}

export default postReducer;