import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  palette: {
    primary: {
      main: "#8AA6A3",
      light: "#5EDFDB",
    },
    secondary: {
      main: "#FBC490",
      light: "#DFD0C2",
    },
    other: {
      gray: "#D9D9D9",
      black: "#1B1B1B",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: "3.5rem",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: "3rem",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: "2.5rem",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: "2rem",
      textTransform: "uppercase",
    },
  },
});
