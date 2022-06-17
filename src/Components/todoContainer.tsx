import TodoHeader from "./todoHeader";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: -12rem;
  padding: 1.5rem;
`;

const TodoContainer = () => {
  return (
    <StyledDiv>
      <TodoHeader />
    </StyledDiv>
  );
};

export default TodoContainer;
