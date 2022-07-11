import ArticleTodo from "./ArticleTodo";
interface todoItemProps {
  item: {
    item: string;
    id: string;
    isCompleted: boolean;
  };
}

const TodoItem = ({ item }: todoItemProps) => {
  return (
    <ArticleTodo
      todoProps={{
        todoItem: item.item,
        id: item.id,
        isCompleted: item.isCompleted,
        todoRemove: true,
      }}
    />
  );
};

export default TodoItem;
