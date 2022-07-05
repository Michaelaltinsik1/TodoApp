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
}
const TodoList = () => {
  let items = useAppSelector<todoItemsType>((state) => state.todoList);
  // const [active, setActive] = useState();
  // const [completed, completed] = useState();
  // const [windowWidth, setWindowWidth] = useState<number>(0);
  // useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  // }, []);
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
  console.log(windowSize);
  return (
    <section>
      {items.todoList.map(({ item, id }: types) => (
        <TodoItem key={id} item={{ item: item, id: id }} />
      ))}

      <TodoFooter
        device={windowSize > 700 ? deviceTypes.Desktop : deviceTypes.Mobile}
      />
    </section>
  );
};
export default TodoList;
