import React from "react";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { blueGrey, lightGreen } from "@mui/material/colors";

const MuiButton = () => {
  const secondaryColor = createTheme({
    palette: {
      secondary: {
        main: blueGrey[400],
        light: blueGrey[100],
        dark: blueGrey[700],
        contrastText: "#fff",
      },
    },
  });

  const customGreen = createTheme({
    palette: {
      customgreen: {
        main: lightGreen[800],
        lighter: lightGreen[300],
        contrastText: "white",
      },
    },
  });

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{ backgroundColor: "crimson" }}
      >
        Primary
      </Button>
      <ThemeProvider theme={secondaryColor}>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </ThemeProvider>

      <ThemeProvider theme={customGreen}>
        <Button
          variant="contained"
          color="customgreen"
          sx={{ backgroundColor: (theme) => theme.palette.customgreen.lighter }}
        >
          Success
        </Button>
      </ThemeProvider>
    </>
  );
};

export default MuiButton;
