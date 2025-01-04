import React from "react";
import ReactDOM from "react-dom/client";

const h1 = (
  <header className="header-section">
    <h1 id="header">Hello React using JSX</h1>
  </header>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);