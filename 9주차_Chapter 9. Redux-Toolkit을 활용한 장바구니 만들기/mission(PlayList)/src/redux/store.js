import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";
import ModalSlice from "./modalSlice";

export default configureStore({
    reducer: {
        cart: CartSlice,
        modal: ModalSlice,
    },
})