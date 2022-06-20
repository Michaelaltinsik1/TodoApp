import { useState } from "react";

const AddNewTodoItem = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [inputInfo, setInputInfo] = useState<string>("");
  console.log(checked);
  const validateTodo = (value: string) => {
    if (value.length > 3 && !checked) {
      setChecked(() => !checked);
    }
    console.log(checked);
  };
  return (
    <div>
      {" "}
      <input
        type="checkbox"
        defaultChecked={checked}
        onClick={() => validateTodo(inputInfo)}
      />
      <input
        type="text"
        placeholder="Create a new todo"
        onChange={(e) => setInputInfo(e.target.value)}
      />
    </div>
  );
};

export default AddNewTodoItem;
