import React from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import { THEMES } from "../constants";
import { useSelector } from "react-redux";

const darkMuiTheme = createMuiTheme({
  palette: {},
});
const lightMuiTheme = createMuiTheme({
  palette: {},
});

export const lightTheme = {
  title: THEMES.LIGHT_THEME,
  colors: {
    primary: "#ffffff",
    secondary: "#bf282d",
    background: "#026AA7",
    darken: "#ededed",
    text: "black",
    tableHeader: "#0d0f23",
    tableHeaderColor: "#ffffff",
  },
};

export const darkTheme = {
  title: THEMES.DARK_THEME,
  colors: {
    primary: "#29356f",
    secondary: "#bf282d",
    background: "#29356f",
    darken: "#202a5c",
    text: "white",
    tableHeader: "#202a5c",
    tableHeaderColor: "#ffffff",
  },
};
const Theme = ({ children }) => {
  const { theme } = useSelector((t) => t.theme);

  return (
    <MuiThemeProvider
      theme={theme === THEMES.LIGHT_THEME ? lightMuiTheme : darkMuiTheme}
    >
      <StylesProvider injectFirst>
        <ThemeProvider
          theme={theme === THEMES.LIGHT_THEME ? lightTheme : darkTheme}
        >
          {children}
        </ThemeProvider>
      </StylesProvider>
    </MuiThemeProvider>
  );
};

export default Theme;
