import { FETCH_BRANDS_ERROR, FETCH_BRANDS_REQUEST, FETCH_BRANDS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_SINGLE_PRODUCT_ERROR, FETCH_SINGLE_PRODUCT_REQUEST, FETCH_SINGLE_PRODUCT_SUCCESS, FETCH_VARIANTS_ERROR, FETCH_VARIANTS_REQUEST, FETCH_VARIANTS_SUCCESS, RESET_SELECTED_PRODUCT, RESET_SELECTED_VARIANT, SET_SELECTED_VARIANT } from "../actions/productAction";

const initialState = {
    products: [],
    loading: false,
    brands: [],
    brandLoading: false,
    error: null,
    variants: [],
    variantsLoading: false,
    variantsError: null,
    product: null,
    productLoading: false,
    productError: null,
    selectedVariant: null
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
        case FETCH_VARIANTS_REQUEST:
            return {
                ...state,
                variantsLoading: true,
                variantsError: null
            };
        case FETCH_VARIANTS_SUCCESS:
            return {
                ...state,
                variants: action.payload,
                variantsLoading: false,
                variantsError: null
            };
        case FETCH_VARIANTS_ERROR:
            return {
                ...state,
                variants: [],
                variantsLoading: false,
                variantsError: action.payload
            };
        case FETCH_SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                productLoading: true,
                productError: null
            }
        case FETCH_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload,
                productLoading: false,
                productError: null
            };
        case FETCH_SINGLE_PRODUCT_ERROR:
            return {
                ...state,
                product: null,
                productLoading: false,
                productError: action.payload
            };

        case RESET_SELECTED_PRODUCT:
            return {
                ...state,
                product: null,
                productLoading: false,
                productError: null,
            };
        case SET_SELECTED_VARIANT:
            return {
                ...state,
                selectedVariant: action.payload
            };
        case RESET_SELECTED_VARIANT:
            return {
                ...state,
                selectedVariant: null
            };
        default:
            return state;
    }
};

export default productsReducer;
