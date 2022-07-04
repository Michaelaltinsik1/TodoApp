// interface todoItemProps {
//   todoCheckBox: boolean;

//   todoDescription?: string;
//   newTodo: boolean;
// }
interface todoItemProps {
  todoItem: string;
}

const TodoItem = (item: todoItemProps) => {
  return <li>{item.todoItem}</li>;
};

export default TodoItem;
