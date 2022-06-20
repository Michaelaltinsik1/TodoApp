import { useAppSelector } from "../App/hooks";
import darkThemeMobileImg from "../images/bg-mobile-dark.jpg";
import lightThemeMobileImg from "../images/bg-mobile-light.jpg";
import styled from "styled-components";
/* background-image: url(${props => props.theme === themeTypes.DARKTHEME ? }); */
enum themeTypes {
  LIGHTTHEME = "LIGHTTHEME",
  DARKTHEME = "DARKTHEME",
}
interface themeState {
  currTheme: themeTypes;
}
const ThemeImg = styled.img<themeState>`
  width: 100vw;
  height: 220px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props: themeState) =>
    props.currTheme === themeTypes.DARKTHEME
      ? darkThemeMobileImg
      : lightThemeMobileImg});
`;
const TodoHeader = () => {
  let theme = useAppSelector<themeTypes>((state) => state.theme.currTheme);
  return (
    <>
      <ThemeImg currTheme={theme} />
    </>
  );
};

export default TodoHeader;
