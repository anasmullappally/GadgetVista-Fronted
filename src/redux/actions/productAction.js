// Action types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

// Action creators
export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchProductsError = (error) => ({
    type: FETCH_PRODUCTS_ERROR,
    payload: error
});

// Thunk action creator for fetching products
export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsRequest());
        try {
            const response = await fetch('https://api.example.com/products');
            const products = await response.json();
            dispatch(fetchProductsSuccess(products));
        } catch (error) {
            dispatch(fetchProductsError(error.message));
        }
    };
};
