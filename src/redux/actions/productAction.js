import axiosInstance from "../../api/axiosInstance";
// Action types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_BRANDS_REQUEST = "FETCH_BRANDS_REQUEST";
export const FETCH_BRANDS_SUCCESS = 'FETCH_BRANDS_SUCCESS';
export const FETCH_BRANDS_ERROR = 'FETCH_BRANDS_ERROR';

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

export const fetchBrandRequest = () => ({
    type: FETCH_BRANDS_REQUEST
})

export const fetchBrandsSuccess = (brands) => ({
    type: FETCH_BRANDS_SUCCESS,
    payload: brands
});

export const fetchBrandsError = (error) => ({
    type: FETCH_BRANDS_ERROR,
    payload: error
});







// Thunk action creator for fetching products
export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsRequest());
        try {
            const { data } = await axiosInstance.get('/products');
            dispatch(fetchProductsSuccess(data.products));
        } catch (error) {
            dispatch(fetchProductsError(error.message));
        }
    };
};

export const fetchBrands = () => {
    return async (dispatch) => {
        dispatch(fetchBrandRequest());
        try {
            const { data } = await axiosInstance('/products/brands');
            dispatch(fetchBrandsSuccess(data.brands));
        } catch (error) {
            dispatch(fetchBrandsError(error.message));
        }
    };
};

