import { createSlice } from '@reduxjs/toolkit';
import { TtodoSelect } from '../../typings/typings';

export const todoSelectSlice = createSlice({
  name: "todoSelect",
  initialState: {
    select: TtodoSelect.ALL
  },
  reducers: {
    setSelect: (state, action) => {
      state.select = action.payload;
    }
  }
});

export default todoSelectSlice.reducer;
export const { setSelect } = todoSelectSlice.actions;
