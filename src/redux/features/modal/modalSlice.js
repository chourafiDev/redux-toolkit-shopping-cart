import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpen: false };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  //actions creator
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

console.log(modalSlice);

//actions
export const { openModal, closeModal } = modalSlice.actions;

//reducers
export default modalSlice.reducer;
