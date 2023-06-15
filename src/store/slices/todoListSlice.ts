import { createSlice } from '@reduxjs/toolkit';
import { TtodoItem, TtodoItemStatus } from '../../typings/typings';
import { findTodo } from '../../utils/findTodo';

const initialList: Array<TtodoItem> = [];

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
      const arr = state.todoList;
      const index = findTodo(arr, action);

      arr.splice(index, 1);
    },
    changeTodoStatus: (state, action) => {
      const arr = state.todoList;
      const index = findTodo(arr, action);
      const currentStatus = arr[index].todoStatus;

      arr[index] = {
        ...arr[index],
        todoStatus:
          currentStatus === TtodoItemStatus.COMPLETE ? TtodoItemStatus.INCOMPLETE : TtodoItemStatus.COMPLETE
      }
    }
  },
});

export default todoListSlice.reducer;
export const { addTodo, removeTodo, changeTodoStatus } = todoListSlice.actions;
