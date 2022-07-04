import { useState } from "react";
import { useAppDispatch } from "../App/hooks";
import { addItem } from "../features/todoListState/todoListSlice";
import ArticleTodo from "./ArticleTodo";
const AddNewTodoItem = () => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState<boolean>(false);
  const [inputInfo, setInputInfo] = useState<string>("");
  const validateTodo = () => {
    if (inputInfo.length > 3 && !checked) {
      setChecked(() => !checked);
      dispatch(addItem(inputInfo));
      setInputInfo(() => "");

      setTimeout(() => {
        setChecked(() => false);
      }, 650);
    }
  };
  return (
    // <ArticleTodo todoProps={{ todoItem: item.todoItem, todoRemove: true }}/>
    <div>
      {" "}
      <input type="checkbox" checked={checked} onChange={validateTodo} />
      <input
        type="text"
        placeholder="Create a new todo"
        value={inputInfo}
        onChange={(e) => setInputInfo(e.target.value)}
      />
    </div>
  );
};

export default AddNewTodoItem;
