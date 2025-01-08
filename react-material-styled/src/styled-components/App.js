import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import {
  StyledButton,
  FancyButton,
  SubmitButtonType,
  ThemedButton,
} from "./styled-components/Button";

function App() {
  const theme = {
    palette: {
      primary: "blue",
      secondary: "grey",
    },
  };

  const GlobalStyles = createGlobalStyle`
  body {
      background-color: lightgreen;
      width: 100%;
      margin: 40px;
  }
  `;
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Styled Components Tutorial</h1>
      <div className="flex-container">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <StyledButton className="flex-item" variant={"outlined"}>
            Styled Button
          </StyledButton>
          <StyledButton className="flex-item">Styled Button</StyledButton>
          <FancyButton className="flex-item" variant={"fancy"}>
            Fancy Button
          </FancyButton>
          <SubmitButtonType className="flex-item">
            Button Submit Type
          </SubmitButtonType>
          <ThemedButton className="flex-item">Themed Button</ThemedButton>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
