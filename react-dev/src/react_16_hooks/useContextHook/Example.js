import React, { useState, useContext, createContext } from "react";

// Create a Context for the theme
const ThemeContext = createContext();
const { Provider } = ThemeContext;

// A component that consumes the theme context
const ThemedComponent = () => {
  console.log("Themed Component");
  const theme = useContext(ThemeContext); // Using context here

  return (
    <div style={{ background: theme.background, color: theme.color }}>
      Hello, Theme!
    </div>
  );
};

// The CSSComponent that provides the context
const CSSComponent = ({ children }) => {
  console.log("CSS Component");
  const [theme, setTheme] = useState({
    background: "lightblue",
    color: "darkblue",
  });

  const updateTheme = () => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      background:
        prevTheme.background === "lightblue" ? "darkgray" : "lightblue",
      color: prevTheme.color === "darkblue" ? "white" : "darkblue",
    }));
  };

  return (
    <Provider value={theme}>
      {children}
      <button
        onClick={updateTheme}
        className="bg-amber-400 text-white font-bold px-4 py-2 m-4 cursor-pointer"
      >
        Toggle Theme
      </button>
    </Provider>
  );
};

// App component
const Example = () => {
  return (
    <div className="border w-[500px] mx-auto m-4 text-center">
      <CSSComponent>
        <ThemedComponent />
        <ThemedComponent />
      </CSSComponent>
    </div>
  );
};

export default Example;
