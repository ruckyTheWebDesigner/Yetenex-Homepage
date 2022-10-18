import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from "@mui/material";

import { useMemo } from "react";

import HomePage from "./pages/HomePage";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const defaultTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",

          background: {
            default: prefersDarkMode ? "#0f172a" : "#f5f5f5",
            paper: prefersDarkMode ? "#0f172a" : "#fff",
          },

          primary: {
            main: prefersDarkMode ? "#47B5FF" : "#256D85",
          },

          secondary: {
            main: prefersDarkMode ? "#14532d" : "#14532d",
          },

          text: {
            primary: prefersDarkMode ? "#fff" : "#0f172a",
            secondary: prefersDarkMode ? "#fff" : "#0f172a",
            disabled: prefersDarkMode ? "#fff" : "#000",
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
