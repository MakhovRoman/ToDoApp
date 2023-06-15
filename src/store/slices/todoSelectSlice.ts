import { createSlice } from '@reduxjs/toolkit';
import { TodoSelect } from '../../typings/typings';

export const todoSelectSlice = createSlice({
  name: "todoSelect",
  initialState: {
    select: TodoSelect.ALL
  },
  reducers: {
    setSelect: (state, action) => {
      state.select = action.payload;
    }
  }
});

export default todoSelectSlice.reducer;
export const { setSelect } = todoSelectSlice.actions;
