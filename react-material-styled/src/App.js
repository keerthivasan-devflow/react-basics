import { Container } from "@mui/material";
import "./App.css";
import MuiBox from "./components/MuiBox";
import MuiButton from "./components/buttons/MuiButton";
import MuiButtonDarkMode from "./components/buttons/MuiButtonDarkMode";
import MuiButtonProp from "./components/buttons/MuiButtonProp";
import StackComponent from "./components/StackComponent";

function App() {
  return (
    <div className="App">
      <h1>React Material UI Components</h1>
      {/* <MuiButton /> */}
      {/* <MuiButtonDarkMode /> */}
      {/* <MuiButtonProp variant={"contained"} /> */}
      <StackComponent />
    </div>
  );
}

export default App;
