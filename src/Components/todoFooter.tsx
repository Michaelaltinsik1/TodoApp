import { todoItemsType } from "../interfaces";
import { useAppSelector } from "../App/hooks";
import ButtonTodo from "./buttonTodo";
enum deviceTypes {
  Desktop,
  Mobile,
}

interface deviceProps {
  device: deviceTypes;
}
enum showState {
  All = "All",
  Active = "Active",
  Completed = "Completed",
}
const TodoFooter = ({ device }: deviceProps) => {
  let items = useAppSelector<todoItemsType>((state) => state.todoList);

  const getCompleted = () => {
    return items.todoList.filter((item) => item.isCompleted);
  };
  const getActive = () => {
    return items.todoList.filter((item) => !item.isCompleted);
  };
  const getActiveLength = () => {
    return getActive().length;
  };
  return (
    <>
      {!!device && (
        <article style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0.8rem 1.8rem",
            }}
          >
            <p style={{ fontSize: "16px" }}>
              {getActiveLength() + " items left"}{" "}
            </p>
            <ButtonTodo text={"Clear Completed"} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.8rem 1.8rem",
            }}
          >
            <ButtonTodo text={"All"} />
            <ButtonTodo text={"Active"} />
            <ButtonTodo text={"Completed"} />
          </div>
        </article>
      )}
      {!device && (
        <article style={{ display: "flex", justifyContent: "space-around" }}>
          <ButtonTodo text={"5 items left"} />
          <div>
            <ButtonTodo text={"Clear Completed"} />
            <ButtonTodo text={"All"} />
            <ButtonTodo text={"Active"} />
          </div>
          <ButtonTodo text={"Completed"} />
        </article>
      )}
    </>
  );
};

export default TodoFooter;
