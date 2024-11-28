import {createSlice} from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {cart: [], count: {}, totalCount: 0, totalPrice: 0},
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;

            const isExist = state.cart.find(cartItem => cartItem.id === item.id);
            if (isExist) {
                state.count[item.id] = (state.count[item.id] || 0) + 1;
            }
            else {
                state.cart.push(item);
                state.count[item.id] = 1;
            }
        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            
            if (state.count[itemId]) {
                state.count[itemId] -= 1;

                if (state.count[itemId] === 0){
                    state.cart = state.cart.filter(cartItem => cartItem.id !== itemId);
                    delete state.count[itemId];
                }
            }
        },

        clearCart: (state) => {
            state.cart = [];
            state.count = {};
            state.totalCount = 0;
            state.totalPrice = 0;
        },
    },
})

export const { addItem, removeItem, clearCart, calculateTotals } = CartSlice.actions;
export default CartSlice.reducer;

