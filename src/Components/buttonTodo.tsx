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
  text: string;
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
    if (text.toLowerCase() === handleEventKey.ClearCompleted) {
      dispatch(clearCompleted());
    } else if (text.toLowerCase() === handleEventKey.ShowAll) {
      console.log("All");
    } else if (text.toLowerCase() === handleEventKey.ShowActive) {
      console.log("Active");
    } else {
      console.log("Completed");
    }
  };
  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default ButtonTodo;
