// import removeButton from "../images/icon-cross.svg";
// import styled from "styled-components";
import ArticleTodo from "./ArticleTodo";
// interface todoItemProps {
//   todoCheckBox: boolean;

//   todoDescription?: string;
//   newTodo: boolean;
// }
// const formComponent;
interface todoItemProps {
  todoItem: string;
}

const TodoItem = (item: todoItemProps) => {
  return (
    // <article>
    //   <input type="checkbox" />
    //   <p>{item.todoItem}</p>
    //   <button>
    //     <img src={removeButton} alt="remove button" />
    //   </button>
    // </article>
    // <>{item.todoItem && <ArticleTodo todoProps={obj} />}</>
    <>
      {item.todoItem && (
        <ArticleTodo
          todoProps={{ todoItem: item.todoItem, todoRemove: true }}
        />
      )}
    </>
  );
};

export default TodoItem;
