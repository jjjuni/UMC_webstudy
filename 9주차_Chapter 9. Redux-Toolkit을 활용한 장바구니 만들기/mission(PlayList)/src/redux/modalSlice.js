import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: {isOpen: false},
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        }
    }
})

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;