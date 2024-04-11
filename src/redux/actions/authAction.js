import axiosInstance from "../../api/axiosInstance";
// import { jwt } from 'jsonwebtoken';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

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

export const login = (credentials) => {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            const response = await axiosInstance.post('/auth/login', credentials);
            console.log(response.data.accessToken);
            const token = response.data.accessToken
            // const decodedToken = jwt.decode(token);
            // console.log(decodedToken, "decodedToken");
            // const user = response.data; // Assuming the API returns the user object
            // localStorage.setItem('token', user.token); // Store the token in localStorage
            // dispatch(loginSuccess(user));
        } catch (error) {
            dispatch(loginError(error.response.data.message));
        }
    };
};
