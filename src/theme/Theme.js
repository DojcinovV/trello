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
  palette: {
    primary: {
      main: "#29356f",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#bf282d",
    },
    background: {
      main: "#29356f",
    },
    darken: {
      main: "#202a5c",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        background: "#bf282d!important",
      },
    },
    MuiTabs: {
      root: {
        background: "#ffffff!important",
      },
    },
    MuiButton: {
      textPrimary: {
        color: "#FFFFFF",
      },
    },
    MuiLink: {
      root: {
        color: "#bf282d!important",
      },
    },
    MuiFormHelperText: {
      root: {
        color: "#ffffff",
      },
    },
    MuiInputLabel: {
      root: {
        color: "#ffffff",
      },
    },
    MuiInputBase: {
      root: {
        color: "#FFFFFF",
      },
    },
    MuiList: {
      root: {
        background: "#29356f",
      },
    },
    MuiSelect: {
      root: {
        background: "#29356f",
      },
    },
    MuiDialogTitle: {
      root: {
        background: "#29356f",
      },
    },
    MuiDialogContent: {
      root: {
        background: "#29356f",
      },
    },
    MuiDialogActions: {
      root: {
        background: "#29356f",
      },
    },
  },
});
const lightMuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0d0f23",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#bf282d",
    },
    background: {
      main: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
  overrides: {
    MuiButton: {
      textPrimary: {
        color: "#000000",
      },
    },
    MuiDropzoneArea: {
      root: {
        background: "#FFFF",
      },
    },
  },
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
