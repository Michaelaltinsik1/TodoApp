import { themeTypes, todoItemsType } from "../interfaces";
import { useAppSelector } from "../App/hooks";
import styled from "styled-components";
import ButtonTodo from "./buttonTodo";
import {
  LightThemeVeryDarkGrayishBlue,
  DarkThemeLightGrayishBlue,
} from "../styles/styles";
import { useState } from "react";
enum deviceTypes {
  Desktop,
  Mobile,
}

interface paragraphStyledProps {
  theme: themeTypes;
}
interface deviceProps {
  device: {
    device: deviceTypes;
    handleFilterButtonClick: Function;
  };
}

const StyledParagraph = styled.p<paragraphStyledProps>`
  font-size: 16px;
  color: ${(props: paragraphStyledProps) =>
    props.theme === themeTypes.DARKTHEME
      ? DarkThemeLightGrayishBlue
      : LightThemeVeryDarkGrayishBlue};
`;

const TodoFooter = ({ device }: deviceProps) => {
  const [currTodoItemFilter, setTodoFilter] = useState("All");
  let items = useAppSelector<todoItemsType>((state) => state.todoList);
  const theme = useAppSelector<themeTypes>((state) => state.theme.currTheme);
  const getActive = () => {
    return items.todoList.filter((item) => !item.isCompleted);
  };
  const getActiveLength = () => {
    return getActive().length;
  };
  const modifyTodoFilter = (text: string) => {
    setTodoFilter(text);
  };
  return (
    <>
      {!!device.device && (
        <article
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0.8rem 1.8rem",
            }}
          >
            <StyledParagraph theme={theme}>
              {getActiveLength() + " items left"}{" "}
            </StyledParagraph>
            <ButtonTodo text={{ text: "Clear Completed" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.8rem 1.8rem",
            }}
          >
            <ButtonTodo
              text={{
                text: "All",
                currTodoItemFilter: currTodoItemFilter,
                modifyTodoFilter: modifyTodoFilter,
                handleFilterButtonClick: device.handleFilterButtonClick,
              }}
            />
            <ButtonTodo
              text={{
                text: "Active",
                currTodoItemFilter: currTodoItemFilter,
                modifyTodoFilter: modifyTodoFilter,
                handleFilterButtonClick: device.handleFilterButtonClick,
              }}
            />
            <ButtonTodo
              text={{
                text: "Completed",
                currTodoItemFilter: currTodoItemFilter,
                modifyTodoFilter: modifyTodoFilter,
                handleFilterButtonClick: device.handleFilterButtonClick,
              }}
            />
          </div>
        </article>
      )}
      {!device.device && (
        <article
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <p style={{ fontSize: "16px" }}>
            {getActiveLength() + " items left"}{" "}
          </p>
          <div>
            <ButtonTodo text={{ text: "Clear Completed" }} />
            <ButtonTodo
              text={{
                text: "All",
                currTodoItemFilter: currTodoItemFilter,
                modifyTodoFilter: modifyTodoFilter,
                handleFilterButtonClick: device.handleFilterButtonClick,
              }}
            />
            <ButtonTodo
              text={{
                text: "Active",
                currTodoItemFilter: currTodoItemFilter,
                modifyTodoFilter: modifyTodoFilter,
                handleFilterButtonClick: device.handleFilterButtonClick,
              }}
            />
          </div>
          <ButtonTodo
            text={{
              text: "Completed",
              currTodoItemFilter: currTodoItemFilter,
              modifyTodoFilter: modifyTodoFilter,
              handleFilterButtonClick: device.handleFilterButtonClick,
            }}
          />
        </article>
      )}
    </>
  );
};

export default TodoFooter;
