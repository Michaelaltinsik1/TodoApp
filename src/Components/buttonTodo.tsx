import styled from "styled-components";
import { clearCompleted } from "../features/todoListState/todoListSlice";
import { useAppDispatch } from "../App/hooks";
const StyledButton = styled.button`
  background-color: transparent;
  padding: 0.5rem;
  border: none;
  font-size: 16px;
`;
interface buttonProps {
  text: {
    text: string;
    handleFilterButtonClick?: Function;
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
  };
  return <StyledButton onClick={handleClick}>{text.text}</StyledButton>;
};

export default ButtonTodo;
