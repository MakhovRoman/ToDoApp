import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./reducers";

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}


export type RootState = ReturnType<typeof rootReducer>;
