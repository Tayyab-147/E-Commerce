import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f0f0f0",
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff9100",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    body1: {
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
  customStyles: {
    typoCustom: {
      color: "black",
    },
    typoCustomCheckOut: {
      color: "white",
    },
    bgCustom: {
      backgroundColor: "white",
    },
    bgCustomCheckOut: {
      backgroundColor: "black",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
    },
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    body1: {
      color: "rgba(255, 255, 255, 0.87)",
    },
  },
  customStyles: {
    typoCustom: {
      color: "white",
    },
    typoCustomCheckOut: {
      color: "black",
    },
    bgCustom: {
      backgroundColor: "#121212",
    },
    bgCustomCheckOut: {
      backgroundColor: "white",
    },
    blackCustom: {
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
    },
  },
});
