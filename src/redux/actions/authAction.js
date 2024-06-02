import { jwtDecode } from "jwt-decode";
import axiosInstance from "../../api/axiosInstance";
import { addToCart } from "./cartAction";
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_ERROR_STATUS_CHANGE = 'LOGIN_ERROR_STATUS_CHANGE';

export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
});

export const loginError = (error) => ({
    type: LOGIN_ERROR,
    payload: error
});

export const loginErrorChange = () => ({
    type: LOGIN_ERROR_STATUS_CHANGE,
})


export const login = (credentials) => {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            const response = await axiosInstance.post('/auth/login', credentials);
            const token = response.data.accessToken;
            const user = jwtDecode(token);
            localStorage.setItem('token', token); // Store the token in localStorage
            delete user.iat
            delete user.exp
            delete user.role
            dispatch(loginSuccess(user));

            const localCart = JSON.parse(localStorage.getItem('cart')) || [];
            for (const item of localCart) {
                const data = { ...item.variant, product: item.product }
                dispatch(addToCart(data, item.quantity));
            }
            localStorage.removeItem('cart');
        } catch (error) {
            dispatch(loginError(error?.response?.data?.message));
        }
    };
};

export const getAuthStatus = () => (dispatch, getState) => {
    const state = getState();
    return state.auth;
};