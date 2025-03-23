import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import "../App.css";
import {
  StyledButton,
  FancyButton,
  SubmitButton,
  ThemedButton,
} from "./Button";

const StyledContainer = () => {
  const theme = {
    palette: {
      primary: "blue",
      secondary: "grey",
    },
  };

  const GlobalStyles = createGlobalStyle`
  body {
      background-color:rgb(253, 249, 200);
      width: 100%;
  }
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  `;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Styled Components Tutorial</h1>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <StyledButton>Styled Button</StyledButton>
          <StyledButton variant={"outlined"}>
            Styled Button Variant
          </StyledButton>
          <FancyButton>Fancy Button</FancyButton>
          <SubmitButton>Submit Button</SubmitButton>
          <ThemedButton>Themed Button</ThemedButton>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default StyledContainer;
