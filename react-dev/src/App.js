import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => when rendered(Object) becomes HTML Element
const heading = React.createElement(
  "div",
  { id: "heading" },
  "Hello Namaste React!"
);

// JSX => React Element => Object => when rendered(Object) becomes HTML Element
const JSXHeading = <div>JSX heading</div>
console.log(JSXHeading);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)