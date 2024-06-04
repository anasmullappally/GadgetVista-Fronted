import axiosInstance from "../../api/axiosInstance";

// // Action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';
export const SET_CART = 'SET_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

// Helper Functions
const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const loadCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

// Action Creators
export const addToCart = (data, quantity) => async (dispatch, getState) => {
    const state = getState();
    const { user } = state.auth
    const variant = JSON.parse(JSON.stringify(data));
    const { product } = variant
    delete variant.product

    if (user) {
        try {
            const { data, status, } = await axiosInstance.post('/cart', { variant: variant._id, quantity });
            if (status === 201) {
                const { cart } = data
                dispatch({
                    type: ADD_TO_CART,
                    payload: cart
                });
            } else {
                //
            }

        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    } else {
        const cart = loadCartFromLocalStorage();

        const itemIndex = cart.findIndex(item => item?.product?._id === product?._id && item?.variant?._id === variant?._id);
        if (itemIndex > -1) {
            cart[itemIndex].quantity += quantity;
        } else {
            const _id = Date.now()
            cart.push({ _id, product, variant, quantity });
        }
        saveCartToLocalStorage(cart);
        dispatch({
            type: SET_CART,
            payload: cart
        });
    }
};

export const fetchCart = () => async (dispatch, getState) => {
    const state = getState();
    const { user } = state.auth

    if (user) {
        try {
            const { data } = await axiosInstance.get('/cart');
            dispatch({
                type: SET_CART,
                payload: data.cart
            });
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    } else {
        const cart = loadCartFromLocalStorage();
        dispatch({
            type: SET_CART,
            payload: cart
        });
    }
};

export const updateCartItem = (itemId, type) => async (dispatch, getState) => {
    const state = getState();
    const { user } = state.auth

    if (user) {
        try {
            await axiosInstance.put(`/cart/${itemId}`, { type });
            const data = { cartId: itemId, type }
            dispatch({
                type: UPDATE_CART_ITEM,
                payload: data
            });
        } catch (error) {
            console.error("Error updating cart item:", error);
        }
    } else {
        const cart = loadCartFromLocalStorage();
        const updatedCart = cart.map((item) =>
            item?._id === itemId ? { ...item, quantity: type === "increment" ? item.quantity + 1 : item.quantity - 1 } : item
        );
        saveCartToLocalStorage(updatedCart);
        dispatch({
            type: SET_CART,
            payload: cart
        });

    }
};

export const removeCartItem = (itemId) => async (dispatch, getState) => {
    const state = getState();
    const { user } = state.auth
    if (user) {
        try {
            await axiosInstance.delete(`/cart/${itemId}`);
            dispatch({
                type: REMOVE_FROM_CART,
                payload: itemId
            });
        } catch (error) {
            console.error("Error removing cart item:", error);
        }
    } else {
        const cart = loadCartFromLocalStorage();
        const updatedCart = cart.filter(item => item._id !== itemId);
        saveCartToLocalStorage(updatedCart);
        dispatch({
            type: SET_CART,
            payload: updatedCart
        });
    }
};