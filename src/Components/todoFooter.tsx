import { todoItemsType } from "../interfaces";
import { useAppSelector } from "../App/hooks";
import ButtonTodo from "./buttonTodo";
enum deviceTypes {
  Desktop,
  Mobile,
}

interface deviceProps {
  device: {
    device: deviceTypes;
    handleFilterButtonClick: Function;
  };
}
enum showState {
  All = "All",
  Active = "Active",
  Completed = "Completed",
}
const TodoFooter = ({ device }: deviceProps) => {
  console.log("Device: ", device.device);
  // console.log("Function: ", handleFilterButtonClick);
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
      {!!device.device && (
        <article style={{ display: "flex", flexDirection: "column" }}>
          {/* <button onClick={() => handleFilterButtonClick("all")}>All</button> */}
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
                handleFilterButtonClick: device.handleFilterButtonClick,
              }}
            />
            <ButtonTodo
              text={{
                text: "Active",
                handleFilterButtonClick: device.handleFilterButtonClick,
              }}
            />
            <ButtonTodo
              text={{
                text: "Completed",
                handleFilterButtonClick: device.handleFilterButtonClick,
              }}
            />
          </div>
        </article>
      )}
      {!device.device && (
        <article style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ fontSize: "16px" }}>
            {getActiveLength() + " items left"}{" "}
          </p>
          <div>
            <ButtonTodo text={{ text: "Clear Completed" }} />
            <ButtonTodo
              text={{
                text: "All",
                handleFilterButtonClick: device.handleFilterButtonClick,
              }}
            />
            <ButtonTodo
              text={{
                text: "Active",
                handleFilterButtonClick: device.handleFilterButtonClick,
              }}
            />
          </div>
          <ButtonTodo
            text={{
              text: "Completed",
              handleFilterButtonClick: device.handleFilterButtonClick,
            }}
          />
        </article>
      )}
    </>
  );
};

export default TodoFooter;
