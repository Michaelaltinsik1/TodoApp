import styled from "styled-components";
import removeButton from "../images/icon-cross.svg";
import checkedImg from "../images/icon-check.svg";
const StyledArticle = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
  background-color: white;
  border-radius: 0.25rem;
  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
  }
  p {
    align-self: center;
  }
  .checkMark {
    align-self: center;
    width: 1.3rem;
    height: 1.3rem;
    background-color: white;
    border-radius: 50%;
    /* border: 1px solid #ddd; */
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
    todoRemove?: boolean;
  };
}

const ArticleTodo = ({ todoProps }: todoPropsType) => {
  console.log("item: ", todoProps);
  // console.log("remove ", todoRemove);
  return (
    <StyledArticle>
      <input type="checkbox" className="checkMark" />
      <p>{todoProps.todoItem}</p>
      {todoProps.todoRemove && (
        <button>
          <img src={removeButton} alt="remove button" />
        </button>
      )}
    </StyledArticle>
  );
};

export default ArticleTodo;
