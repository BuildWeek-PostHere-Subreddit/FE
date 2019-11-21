import { ID_FETCH, ID_SUCCESS, ID_FAILURE } from '../actions/loginActions';

const initialState = {
    idUser: undefined,
    isLogging: false,
    isLoggedIn: false,
    error: ""
};

function loginId(state = initialState, action) {
    switch (action.type) {
        case ID_FETCH:
            return {
                ...state,
                isLogging: true,
                error: ""
            };
        case ID_SUCCESS:
            //on success action.payload brings in user id
            console.log(action.payload);
            return {
                ...state,
                isLogging: false,
                isLoggedIn: true,
                error: "",
                idUser: action.payload
            };
        case ID_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLogging: false
            };
        default:
            return state;
    }
}

export default loginId;