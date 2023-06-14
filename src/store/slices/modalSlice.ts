import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setModalOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { setModalOpen } = modalSlice.actions;
