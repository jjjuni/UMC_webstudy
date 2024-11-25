import {createSlice} from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {modalVisible: false, modalTodo: null},
    reducers: {
        setModalVisible: (state, action) => {
            state.modalVisible = action.payload;
        },
        setModalTodo: (state, action) => {
            state.modalTodo = action.payload;
        },
    },
})

export const { setModalVisible, setModalTodo } = modalSlice.actions;
export default modalSlice.reducer;