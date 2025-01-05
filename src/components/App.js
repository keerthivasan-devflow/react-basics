import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Container from "./Container";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Container />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
