import axiosInstance from "../../api/axiosInstance";
// Action types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_BRANDS_REQUEST = "FETCH_BRANDS_REQUEST";
export const FETCH_BRANDS_SUCCESS = 'FETCH_BRANDS_SUCCESS';
export const FETCH_BRANDS_ERROR = 'FETCH_BRANDS_ERROR';
export const FETCH_VARIANTS_REQUEST = "FETCH_VARIANTS_REQUEST";
export const FETCH_VARIANTS_SUCCESS = 'FETCH_VARIANTS_SUCCESS';
export const FETCH_VARIANTS_ERROR = 'FETCH_VARIANTS_ERROR';
export const FETCH_SINGLE_PRODUCT_REQUEST = "FETCH_SINGLE_PRODUCT_REQUEST"
export const FETCH_SINGLE_PRODUCT_SUCCESS = "FETCH_SINGLE_PRODUCT_SUCCESS"
export const FETCH_SINGLE_PRODUCT_ERROR = "FETCH_SINGLE_PRODUCT_ERROR"
export const SET_SELECTED_VARIANT = "SET_SELECTED_VARIANT"
export const RESET_SELECTED_VARIANT = "RESET_SELECTED_VARIANT"
export const RESET_SELECTED_PRODUCT = "RESET_SELECTED_PRODUCT"


export const FETCH_PRODUCT_REVIEWS_SUCCESS = "FETCH_PRODUCT_REVIEWS_SUCCESS"
export const FETCH_PRODUCT_REVIEWS_ERROR = "FETCH_PRODUCT_REVIEWS_ERROR"

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

export const fetchVariantsRequest = () => ({
    type: FETCH_VARIANTS_REQUEST
});

export const fetchVariantsSuccess = (variants) => ({
    type: FETCH_VARIANTS_SUCCESS,
    payload: variants
});

export const fetchVariantsError = (error) => ({
    type: FETCH_VARIANTS_ERROR,
    payload: error
});

export const fetchSingleProductRequest = () => ({
    type: FETCH_SINGLE_PRODUCT_REQUEST
});

export const fetchSingleProductSuccess = (product) => ({
    type: FETCH_SINGLE_PRODUCT_SUCCESS,
    payload: product
});

export const fetchSIngleProductError = (error) => ({
    type: FETCH_SINGLE_PRODUCT_ERROR,
    payload: error
});

export const setSelectedVariant = (variant) => ({
    type: SET_SELECTED_VARIANT,
    payload: variant
})

export const resetSelectedVariant = () => ({
    type: RESET_SELECTED_VARIANT,
})

export const resetSelectedProduct = () => ({
    type: RESET_SELECTED_PRODUCT,
})

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
            const { data } = await axiosInstance.get('/products/brands');
            dispatch(fetchBrandsSuccess(data.brands));
        } catch (error) {
            dispatch(fetchBrandsError(error.message));
        }
    };
};

export const fetchVariants = () => {
    return async (dispatch) => {
        dispatch(fetchVariantsRequest());
        try {
            const { data } = await axiosInstance.get('/products/variants');
            dispatch(fetchVariantsSuccess(data.variants));
        } catch (error) {
            dispatch(fetchVariantsError(error.message));
        }
    }
}

export const getSingleProductDetails = (productId) => {
    return async (dispatch) => {
        dispatch(fetchSingleProductRequest());
        try {
            const { data } = await axiosInstance.get(`/products/${productId}`);
            dispatch(fetchSingleProductSuccess({ product: data.product, reviews: data.reviews }));
            // reviews
        } catch (error) {
            dispatch(fetchSIngleProductError(error.message));

        }
    }
}
