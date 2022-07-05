import ArticleTodo from "./ArticleTodo";
interface todoItemProps {
  item: {
    item: string;
    id: string;
  };
}

const TodoItem = ({ item }: todoItemProps) => {
  return (
    <ArticleTodo
      todoProps={{
        todoItem: item.item,
        id: item.id,
        todoRemove: true,
      }}
    />
  );
};

export default TodoItem;
