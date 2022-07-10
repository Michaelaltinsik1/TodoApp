import { useAppSelector } from "../App/hooks";
import TodoItem from "./todoItem";
import { useEffect, useState } from "react";
import TodoFooter from "./todoFooter";
import { todoItemsType } from "../interfaces";
enum deviceTypes {
  Desktop,
  Mobile,
}
enum filterTypes {
  ShowAll = "all",
  ShowCompleted = "completed",
  ShowActive = "active",
}
interface types {
  item: string;
  id: string;
  isCompleted: boolean;
}
const TodoList = () => {
  let items = useAppSelector<todoItemsType>((state) => state.todoList);
  // let [currTodos, setCurrTodos] = useState<any>([]);

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

  const handleFilterButtonClick = (text: string) => {
    if (text.toLowerCase() === filterTypes.ShowAll) {
      console.log(text + " handlefunction1");
    } else if (text.toLowerCase() === filterTypes.ShowActive) {
      console.log(text + " handlefunction2");
    } else {
      console.log(text + " handlefunction3");
    }
  };
  return (
    <section>
      {items.todoList.map(({ item, id, isCompleted }: types) => (
        <TodoItem
          key={id}
          item={{ item: item, id: id, isCompleted: isCompleted }}
        />
      ))}

      <TodoFooter
        device={{
          device: windowSize > 700 ? deviceTypes.Desktop : deviceTypes.Mobile,
          handleFilterButtonClick: handleFilterButtonClick,
        }}
      />
    </section>
  );
};
export default TodoList;
