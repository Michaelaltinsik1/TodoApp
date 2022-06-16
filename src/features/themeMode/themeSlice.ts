import { createSlice } from "@reduxjs/toolkit";

enum themeTypes {
  LIGHTTHEME = "LIGHTTHEME",
  DARKTHEME = "DARKTHEME",
}
interface themeState {
  currTheme: themeTypes;
}
const initialState: themeState = {
  currTheme: themeTypes.LIGHTTHEME,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleTheme: (state) => {
      if (state.currTheme === themeTypes.LIGHTTHEME) {
        state.currTheme = themeTypes.DARKTHEME;
      } else {
        state.currTheme = themeTypes.LIGHTTHEME;
      }
    },
  },
});

export const { toogleTheme } = themeSlice.actions;
export default themeSlice.reducer;
