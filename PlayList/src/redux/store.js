import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";

export default configureStore({
    reducer: {
        cart: CartSlice,
    },
})