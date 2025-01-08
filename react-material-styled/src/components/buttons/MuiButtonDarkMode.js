import React from "react";
import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const MuiButtonDarkMode = () => {
  const darktheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darktheme}>
        <CssBaseline />
        <Button
          variant="contained"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "grey" : "blue",
          }}
        >
          Dark Theme Button
        </Button>
      </ThemeProvider>
    </>
  );
};

export default MuiButtonDarkMode;
