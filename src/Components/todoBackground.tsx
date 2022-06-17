import { useAppDispatch, useAppSelector } from "../App/hooks";
import { toogleTheme } from "../features/themeMode/themeSlice";
import darkThemeDesktopImg from "../images/bg-desktop-dark.jpg";
import darkThemeMobileImg from "../images/bg-mobile-dark.jpg";
import styled from "styled-components";
/* background-image: url(${props => props.theme === themeTypes.DARKTHEME ? }); */
const ThemeImg = styled.img`
  width: 100vw;
  height: 220px;
  background-size: cover;
  background-repeat: no-repeat;

  background-image: url(${darkThemeMobileImg});
`;

const TodoHeader = () => {
  const dispatch = useAppDispatch();
  let theme = useAppSelector<themeTypes>((state) => state.theme.currTheme);
  return (
    <>
      <h2>{theme}</h2>
      {/* <button onClick={() => dispatch(toogleTheme())}>Toogle</button> */}
      <ThemeImg />
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
