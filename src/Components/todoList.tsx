import { useId } from "react";
import { useAppSelector } from "../App/hooks";
import TodoItem from "./todoItem";

const TodoList = () => {
  const id = useId();
  let items = useAppSelector<any>((state) => state.todoList.todoList);
  console.log("TodoList: " + items);
  return (
    <ul>
      {items.map((item: string, index: number) => (
        <TodoItem key={id + index} todoItem={item} />
      ))}
    </ul>
  );
};

export default TodoList;
