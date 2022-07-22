import TodoHeader from "./todoHeader";
import AddNewTodoItem from "./addNewTodo";
import styled from "styled-components";
import TodoList from "./todoList";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: -12rem;
  padding: 1.5rem;
  max-width: 800px;
`;

const TodoContainer = () => {
  return (
    <StyledDiv>
      <TodoHeader />
      <AddNewTodoItem />
      <TodoList />
    </StyledDiv>
  );
};

export default TodoContainer;
