import lightThemeIcon from "../images/icon-sun.svg";
import darkThemeIcon from "../images/icon-moon.svg";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { toogleTheme } from "../features/themeMode/themeSlice";

enum themeTypes {
  LIGHTTHEME = "LIGHTTHEME",
  DARKTHEME = "DARKTHEME",
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    color: white;
    letter-spacing: 0.9rem;
    text-transform: uppercase;
  }
  button {
    background-color: transparent;
    border: none;
  }
`;
const TodoHeader = () => {
  const dispatch = useAppDispatch();
  let theme = useAppSelector<themeTypes>((state) => state.theme.currTheme);
  return (
    <StyledHeader>
      <h1>Todo</h1>
      <button onClick={() => dispatch(toogleTheme())}>
        {theme === themeTypes.LIGHTTHEME && (
          <img src={darkThemeIcon} alt="Dark theme icon" />
        )}
        {theme === themeTypes.DARKTHEME && (
          <img src={lightThemeIcon} alt="Light theme icon" />
        )}
      </button>
    </StyledHeader>
  );
};

export default TodoHeader;
