import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  padding: 0.5rem;
  border: none;
`;
interface buttonProps {
  text: string;
}
const ButtonTodo = ({ text }: buttonProps) => {
  console.log(text);
  return <StyledButton>{text}</StyledButton>;
};

export default ButtonTodo;
