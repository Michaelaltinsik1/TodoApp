import { useAppSelector } from "../App/hooks";
import TodoItem from "./todoItem";
import { todoItemsType } from "../interfaces";
interface types {
  item: string;
  id: string;
}
const TodoList = () => {
  let items = useAppSelector<todoItemsType>((state) => state.todoList);
  console.log(items.todoList);
  return (
    <section>
      {items.todoList.map(({ item, id }: types) => (
        <TodoItem key={id} item={{ item: item, id: id }} />
      ))}
    </section>
  );
};
export default TodoList;
