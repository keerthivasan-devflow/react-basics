import React from "react";
import ReactDOM from "react-dom/client";
import TransitionHook from "./TransitionHook";
import DeferredValueHook from "./DeferredValueHook";

const App = () => {
  return (
    <>
      <TransitionHook />
      <DeferredValueHook />
    </>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
