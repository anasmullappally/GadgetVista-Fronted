const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const { variant, quantity } = action.payload;
            const { product } = variant;
            // Ensure cart is an array
            const cart = Array.isArray(state.cart) ? state.cart : [];
            const itemIndex = cart.findIndex(
                item => item.product._id === product._id && item.variant._id === variant._id
            );

            if (itemIndex > -1) {
                // Return a new state with updated quantity for existing item
                const updatedCart = cart.map((item, index) =>
                    index === itemIndex ? { ...item, quantity: item.quantity + quantity } : item
                );
                return { ...state, cart: updatedCart };
            } else {
                // Add new item to cart
                return { ...state, cart: [...cart, { product, variant, quantity }] };
            }
        }

        default:
            return state;
    }
};

export default cartReducer;
