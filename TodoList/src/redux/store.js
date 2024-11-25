import { configureStore } from "@reduxjs/toolkit";
import  modalSlice  from "./modalSlice";

export default configureStore({
    reducer: {
        modal: modalSlice,
    },
})