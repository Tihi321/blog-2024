import { DefaultTheme } from "solid-styled-components";

import { colorsDark, colorsLight } from "./colors";

const theme = {
  fonts: {
    body: "'Georgia', serif",
    heading: "'Roboto', sans-serif",
  },
};

export type ThemeName = "light" | "dark";

export const lightTheme: DefaultTheme = { ...theme, colors: colorsLight };
export const darkTheme: DefaultTheme = { ...theme, colors: colorsDark };
