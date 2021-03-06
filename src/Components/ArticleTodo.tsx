import styled from "styled-components";
import {
  removeItem,
  toogleIsCompleted,
} from "../features/todoListState/todoListSlice";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import removeButton from "../images/icon-cross.svg";
import checkedImg from "../images/icon-check.svg";
import { useState } from "react";
import { themeTypes } from "../interfaces";
import {
  LightThemeVeryLightGrayishBlue,
  LightThemeVeryDarkGrayishBlue,
  DarkThemeVeryDarkDesaturatedBlue,
  DarkThemeLightGrayishBlue,
} from "../styles/styles";

interface articleProps {
  theme: themeTypes;
}

const StyledArticle = styled.article<articleProps>`
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
  /* background-color: white; */
  border-radius: 0.25rem;
  border-bottom: 1px solid gray;
  background-color: ${(props: articleProps) =>
    props.theme === themeTypes.DARKTHEME
      ? DarkThemeVeryDarkDesaturatedBlue
      : LightThemeVeryLightGrayishBlue};
  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  p {
    align-self: center;
    color: ${(props: articleProps) =>
      props.theme === themeTypes.DARKTHEME
        ? DarkThemeLightGrayishBlue
        : LightThemeVeryDarkGrayishBlue};
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
    background-color: ${(props: articleProps) =>
      props.theme === themeTypes.DARKTHEME
        ? DarkThemeVeryDarkDesaturatedBlue
        : LightThemeVeryLightGrayishBlue};
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
    isCompleted: boolean;
    todoRemove?: boolean;
  };
}

const ArticleTodo = ({ todoProps }: todoPropsType) => {
  const theme = useAppSelector<themeTypes>((state) => state.theme.currTheme);
  console.log(theme);
  console.log(todoProps.isCompleted);
  const dispatch = useAppDispatch();
  const [isCheckBoxStateActive, setCheckBoxState] = useState(
    todoProps.isCompleted
  );

  const toogleCheckBoxState = () => {
    setCheckBoxState(() => !isCheckBoxStateActive);
    dispatch(toogleIsCompleted(todoProps.id));
  };
  const deleteTodo = (id: string) => {
    dispatch(removeItem(id));
  };
  return (
    <StyledArticle theme={theme}>
      <input
        type="checkbox"
        className="checkMark"
        checked={isCheckBoxStateActive}
        onClick={toogleCheckBoxState}
        readOnly
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
