// Action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';
export const SET_CART = 'SET_CART';

// Action creators
export const addToCart = (variant, quantity) => ({
    type: ADD_TO_CART,
    payload: { variant, quantity }
});

export const removeFromCart = (product, variant) => ({
    type: REMOVE_FROM_CART,
    payload: { product, variant }
});


export const updateItemQuantity = (product, variant, quantity) => ({
    type: UPDATE_ITEM_QUANTITY,
    payload: { product, variant, quantity }
});

export const setCart = (cart) => ({
    type: SET_CART,
    payload: cart
});