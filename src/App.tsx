import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./index.css";
import Grocery from "./features/grocery";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3340FF",
    },
    secondary: {
      main: "#ea7719",
    },
  },
  typography: {
    fontFamily: "sf-pro-text",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <main className="app-wrapper">
        <Grocery />
      </main>
    </ThemeProvider>
  );
};

export default App;
