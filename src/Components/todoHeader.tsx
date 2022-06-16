import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { toogleTheme } from "../features/themeMode/themeSlice";

const TodoHeader = () => {
  const dispatch = useAppDispatch();
  let theme = useAppSelector<themeTypes>((state) => state.theme.currTheme);
  return (
    <>
      <button onClick={() => dispatch(toogleTheme())}>Toogle</button>
      {/* <button onClick={() => toogle(dispatch)}></button> */}
      <h1>{theme}</h1>
    </>
  );
};

// const toogle = (action: any) => {
//   action(toogleTheme);
//   let theme = useAppSelector<themeTypes>((state) => state.theme.currTheme);
// };
enum themeTypes {
  LIGHTTHEME = "LIGHTTHEME",
  DARKTHEME = "DARKTHEME",
}
interface themeState {
  currTheme: themeTypes;
}
export default TodoHeader;
