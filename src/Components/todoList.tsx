import { useAppSelector } from "../App/hooks";
import TodoItem from "./todoItem";
import { todoItemsType } from "../interfaces";
import { useEffect, useState } from "react";
import TodoFooter from "./todoFooter";
enum deviceTypes {
  Desktop,
  Mobile,
}
interface types {
  item: string;
  id: string;
  isCompleted: boolean;
}
const TodoList = () => {
  let items = useAppSelector<todoItemsType>((state) => state.todoList);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    return window.innerWidth;
  }
  return (
    <section>
      {items.todoList.map(({ item, id, isCompleted }: types) => (
        <TodoItem
          key={id}
          item={{ item: item, id: id, isCompleted: isCompleted }}
        />
      ))}

      <TodoFooter
        device={windowSize > 700 ? deviceTypes.Desktop : deviceTypes.Mobile}
      />
    </section>
  );
};
export default TodoList;
