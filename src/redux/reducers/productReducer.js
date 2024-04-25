import { FETCH_BRANDS_ERROR, FETCH_BRANDS_REQUEST, FETCH_BRANDS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../actions/productAction";

const initialState = {
    products: [],
    brands: [],
    loading: false,
    brandLoading: false,
    error: null,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null
            };
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                products: [],
                loading: false,
                error: action.payload
            };
        case FETCH_BRANDS_REQUEST:
            return {
                ...state,
                brandLoading: true,
                error: null
            };
        case FETCH_BRANDS_SUCCESS:
            return {
                ...state,
                brands: action.payload,
                brandLoading: false,
                error: null
            };
        case FETCH_BRANDS_ERROR:
            return {
                ...state,
                brands: [],
                brandLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default productsReducer;
