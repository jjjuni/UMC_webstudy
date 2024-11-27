import {createSlice} from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {cart: [], count: {}},
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
        }
    },
})

export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;

