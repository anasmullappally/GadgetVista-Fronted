import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART, UPDATE_CART_ITEM } from "../actions/cartAction";

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return { ...state, cart: action.payload };
        case ADD_TO_CART: {
            const { variant, quantity } = action.payload;
            const { product } = variant;
            // Ensure cart is an array
            const cart = Array.isArray(state.cart) ? state.cart : [];
            const itemIndex = cart.findIndex(
                item => item?.product?._id === product?._id && item?.variant?._id === variant?._id
            );

            if (itemIndex > -1) {
                // Return a new state with updated quantity for existing item
                const updatedCart = cart.map((item, index) =>
                    index === itemIndex ? { ...item, quantity: item.quantity + quantity } : item
                );
                return { ...state, cart: updatedCart };
            } else {
                // Add new item to cart
                return { ...state, cart: [...cart, action.payload] };
            }
        } case UPDATE_CART_ITEM: {
            const { cartId, type } = action.payload;
            const { cart } = state

            if (!cart) return state
            //updating cart
            const updatedCart = cart.map((item) =>
                item?._id === cartId ? { ...item, quantity: type === "increment" ? item.quantity + 1 : item.quantity - 1 } : item
            );
            return { ...state, cart: updatedCart };
        }
        case REMOVE_FROM_CART: {
            const cartId = action.payload
            const { cart } = state
            if (!cart) return state
            //updating the cart
            const updatedCart = cart.filter((item) => item._id !== cartId)
            return { ...state, cart: updatedCart };
        }
        default:
            return state;
    }
};

export default cartReducer;
