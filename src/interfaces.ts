export interface todoItemsType {
  todoList: { item: string; id: string; isCompleted: boolean }[];
}

export interface todoItemType {
  isCompleted: any;
  todoList: { item: string; id: string; isCompleted: boolean };
}

export enum themeTypes {
  LIGHTTHEME = "LIGHTTHEME",
  DARKTHEME = "DARKTHEME",
}
