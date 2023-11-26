import { colorsDark, colorsLight } from "./colors";

const theme = {
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    heading:
      "Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  fontSizes: {
    xs: ".75rem",
    sm: ".875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
  },
  spacing: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
};

export const light = { ...theme, colors: colorsLight };
export const dark = { ...theme, colors: colorsDark };
