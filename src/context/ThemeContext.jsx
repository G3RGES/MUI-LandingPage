import { createContext, useState } from "react";
import theme from "../utils/theme";
import { ThemeProvider } from "@mui/material";

export const MyThemeContext = createContext();

export default function MyThemeContextProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((prev) => (prev == "light" ? "dark" : "light"));
  };

  return (
    <MyThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme(themeMode)}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  );
}
