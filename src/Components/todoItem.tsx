interface todoItemProps {
  todoCheckBox: boolean;

  todoDescription?: string;
  newTodo: boolean;
}

const TodoItem = (todoItem: todoItemProps) => {
  return (
    <li>
      {" "}
      <input type="checkbox" />
    </li>
  );
};

export default TodoItem;
