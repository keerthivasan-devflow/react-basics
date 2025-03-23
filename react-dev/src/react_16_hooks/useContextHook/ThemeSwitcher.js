import React, { useState, createContext, useContext, memo } from "react";

const ThemeContext = createContext();
const { Provider } = ThemeContext;

const ThemedComponent = memo(() => {
  const theme = useContext(ThemeContext);
  console.log("ThemedComponent re-rendered");
  return <div>{theme}</div>;
});

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  console.log("ThemeSwitcher re-rendered");
  return (
    <Provider value={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemedComponent />
    </Provider>
  );
};

export default ThemeSwitcher;
