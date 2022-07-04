import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import TodoList from "../../Components/todoList";

interface todoItemType {
  todoList: string[];
}
const initialState: todoItemType = {
  todoList: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      state.todoList.push(action.payload);
    },
  },
});

export const { addItem } = todoListSlice.actions;
export default todoListSlice.reducer;
