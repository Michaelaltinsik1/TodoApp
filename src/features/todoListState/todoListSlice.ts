import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import TodoList from "../../Components/todoList";

interface todoItemType {
  // todoList: string[];
  todoList: { item: string; id: string }[];
}
const initialState: todoItemType = {
  todoList: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ item: string; id: string }>) {
      state.todoList.push({ item: action.payload.item, id: action.payload.id });
    },
    removeItem(state, action: PayloadAction<string>) {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addItem, removeItem } = todoListSlice.actions;
export default todoListSlice.reducer;
