import React from "react";
import { useAppSelector } from "./App/hooks";
import TodoBG from "./Components/todoBackground";
import TodoContainer from "./Components/todoContainer";
import styled from "styled-components";
import { themeTypes } from "./interfaces";
import {
  DarkThemeVeryDarkBlue,
  LightThemeVeryLightGray,
} from "./styles/styles";
interface ThemeProp {
  theme: themeTypes;
}

const StyledApp = styled.div<ThemeProp>`
  min-height: 100vh;
  background-color: ${(props: ThemeProp) =>
    props.theme === themeTypes.DARKTHEME ? DarkThemeVeryDarkBlue : `white`};
`;

function App() {
  let theme = useAppSelector<themeTypes>((state) => state.theme.currTheme);
  return (
    <StyledApp theme={theme}>
      <TodoBG />
      <TodoContainer />
    </StyledApp>
  );
}

export default App;
