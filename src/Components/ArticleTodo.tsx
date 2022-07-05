import styled from "styled-components";
import { removeItem } from "../features/todoListState/todoListSlice";
import { useAppDispatch } from "../App/hooks";
import removeButton from "../images/icon-cross.svg";
import checkedImg from "../images/icon-check.svg";
import { useState } from "react";
const StyledArticle = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
  background-color: white;
  border-radius: 0.25rem;
  border-bottom: 1px solid gray;
  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  p {
    align-self: center;
  }
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  .checkMark {
    align-self: center;
    width: 1.3rem;
    height: 1.3rem;
    background-color: white;
    border-radius: 50%;
    appearance: none;
    outline: none;
    cursor: pointer;
    border: 2px solid #7e3ff2;
  }
  .checkMark:checked {
    background: url(${checkedImg});
    background-size: cover;
    border: none;
  }
`;
interface todoPropsType {
  todoProps: {
    todoItem: string;
    id: string;
    todoRemove?: boolean;
  };
}

const ArticleTodo = ({ todoProps }: todoPropsType) => {
  const dispatch = useAppDispatch();
  const [isCheckBoxStateActive, setCheckBoxState] = useState(false);

  const toogleCheckBoxState = () => {
    setCheckBoxState(() => !isCheckBoxStateActive);
  };
  const deleteTodo = (id: string) => {
    dispatch(removeItem(id));
  };
  return (
    <StyledArticle>
      <input
        type="checkbox"
        className="checkMark"
        onClick={toogleCheckBoxState}
      />
      <p className={isCheckBoxStateActive ? "completed" : ""}>
        {todoProps.todoItem}
      </p>
      {todoProps.todoRemove && (
        <button
          onClick={() => {
            deleteTodo(todoProps.id);
          }}
        >
          <img src={removeButton} alt="remove button" />
        </button>
      )}
    </StyledArticle>
  );
};

export default ArticleTodo;
