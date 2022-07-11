export interface todoItemsType {
  // todoList: string[];
  todoList: { item: string; id: string; isCompleted: boolean }[];
}

export interface todoItemType {
  isCompleted: any;
  // todoList: string[];
  todoList: { item: string; id: string; isCompleted: boolean };
}
