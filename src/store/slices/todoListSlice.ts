import { createSlice } from '@reduxjs/toolkit';
import { todoItem } from '../../typings/typings';

const initialList: Array<todoItem> = [];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todoList: initialList,
  },
  reducers: {
    addTodo: (state, action) => {
     state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList.filter(item => item != action.payload);
    },
  },
});

export default todoListSlice.reducer;
export const { addTodo, removeTodo } = todoListSlice.actions;
