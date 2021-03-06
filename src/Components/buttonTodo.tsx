import styled from "styled-components";
import { clearCompleted } from "../features/todoListState/todoListSlice";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { themeTypes } from "../interfaces";
import {
  LightThemeVeryDarkGrayishBlue,
  DarkThemeLightGrayishBlue,
  BrightBlue,
} from "../styles/styles";
interface buttonStyleProps {
  theme: themeTypes;
  filter: string | undefined;
  text: string;
}
const StyledButton = styled.button<buttonStyleProps>`
  background-color: transparent;
  padding: 0.5rem;
  border: none;
  font-size: 16px;
  color: ${(props: buttonStyleProps) =>
    props.theme === themeTypes.DARKTHEME
      ? DarkThemeLightGrayishBlue
      : LightThemeVeryDarkGrayishBlue};
  color: ${(props: buttonStyleProps) =>
    props.filter === props.text ? BrightBlue : ""};
`;
interface buttonProps {
  text: {
    text: string;
    handleFilterButtonClick?: Function;
    currTodoItemFilter?: string;
    modifyTodoFilter?: Function;
  };
}
enum handleEventKey {
  ShowAll = "all",
  ShowActive = "active",
  ShowCompleted = "completed",
  ClearCompleted = "clear completed",
}
const ButtonTodo = ({ text }: buttonProps) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector<themeTypes>((state) => state.theme.currTheme);
  const handleClick = () => {
    if (text.text.toLowerCase() === handleEventKey.ClearCompleted) {
      dispatch(clearCompleted());
    } else if (
      text.text.toLowerCase() === handleEventKey.ShowAll &&
      text.handleFilterButtonClick
    ) {
      text.handleFilterButtonClick(text.text);
    } else if (
      text.text.toLowerCase() === handleEventKey.ShowActive &&
      text.handleFilterButtonClick
    ) {
      text.handleFilterButtonClick(text.text);
    } else {
      if (text.handleFilterButtonClick) text.handleFilterButtonClick(text.text);
    }

    if (text.modifyTodoFilter) {
      text.modifyTodoFilter(text.text);
    }
  };
  return (
    <StyledButton
      theme={theme}
      filter={text.currTodoItemFilter}
      text={text.text}
      onClick={handleClick}
    >
      {text.text}
    </StyledButton>
  );
};

export default ButtonTodo;
