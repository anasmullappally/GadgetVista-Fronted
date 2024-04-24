import { LOGIN_ERROR, LOGIN_ERROR_STATUS_CHANGE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/authAction";


const initialState = {
    user: null,
    loading: false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, error: null };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, user: action.payload, error: null };
        case LOGIN_ERROR:
            return { ...state, loading: false, error: action.payload };
        case LOGIN_ERROR_STATUS_CHANGE:
            return { ...state, loading: false, error: null };
        default:
            return state;
    }
};

export default authReducer;