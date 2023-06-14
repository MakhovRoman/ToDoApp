import { combineReducers } from "@reduxjs/toolkit";

import todoListSlice from "./slices/todoListSlice";
import todoSelectSlice from "./slices/todoSelectSlice";
import modalSlice from "./slices/modalSlice";

export const rootReducer = combineReducers({
  todoList: todoListSlice,
  todoSelect: todoSelectSlice,
  setModalOpen: modalSlice,
})
