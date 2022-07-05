import ButtonTodo from "./buttonTodo";
enum deviceTypes {
  Desktop,
  Mobile,
}

interface deviceProps {
  device: deviceTypes;
}

const TodoFooter = ({ device }: deviceProps) => {
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
            <ButtonTodo text={"5 items left"} />
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
