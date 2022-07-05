import { useState } from "react";
import { useAppDispatch } from "../App/hooks";
import { addItem } from "../features/todoListState/todoListSlice";
import { v4 as uuidv4 } from "uuid";
import checkedImg from "../images/icon-check.svg";
import styled from "styled-components";

const StyledArticle = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: white;
  border-radius: 0.25rem;
  border-bottom: 1px solid gray;
  margin-bottom: 1.7rem;
  .input-text {
    min-width: 80%;
    padding: 0.3rem;
    border-radius: 0.6rem;
    border: 1px solid black;
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

const AddNewTodoItem = () => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState<boolean>(false);
  const [inputInfo, setInputInfo] = useState<string>("");
  const validateTodo = () => {
    if (inputInfo.length > 3 && !checked) {
      const id = uuidv4();
      setChecked(() => !checked);
      dispatch(addItem({ item: inputInfo, id: id }));
      setInputInfo(() => "");

      setTimeout(() => {
        setChecked(() => false);
      }, 650);
    }
  };
  return (
    // <ArticleTodo todoProps={{ todoItem: item.todoItem, todoRemove: true }}/>
    <StyledArticle>
      {" "}
      <input
        type="checkbox"
        checked={checked}
        onChange={validateTodo}
        className="checkMark"
      />
      <input
        type="text"
        placeholder="Create a new todo"
        value={inputInfo}
        className="input-text"
        onChange={(e) => setInputInfo(e.target.value)}
      />
    </StyledArticle>
  );
};

export default AddNewTodoItem;
