import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeMode/themeSlice";
import todoListReducer from "../features/todoListState/todoListSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todoList: todoListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
