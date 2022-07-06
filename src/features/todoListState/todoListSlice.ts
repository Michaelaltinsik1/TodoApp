import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import TodoList from "../../Components/todoList";

interface todoItemType {
  todoList: { item: string; id: string; isCompleted: boolean }[];
}
const initialState: todoItemType = {
  todoList: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ item: string; id: string }>) {
      state.todoList.push({
        item: action.payload.item,
        id: action.payload.id,
        isCompleted: false,
      });
    },
    removeItem(state, action: PayloadAction<string>) {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    toogleIsCompleted(state, action: PayloadAction<string>) {
      state.todoList = state.todoList.map((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted;
          return item;
        } else {
          return item;
        }
      });
    },
    clearCompleted(state) {
      state.todoList = state.todoList.filter((item) => !item.isCompleted);
    },
    // getCompleted(state) {
    //   return state.todoList.filter((item) => item.isCompleted);
    // },
    // getActive(state) {
    //   return state.todoList.filter((item) => !item.isCompleted);
    // },
  },
});

export const { addItem, removeItem, toogleIsCompleted, clearCompleted } =
  todoListSlice.actions;
export default todoListSlice.reducer;
