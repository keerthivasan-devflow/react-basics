import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

// React Element => Object => when rendered(Object) becomes HTML Element
const heading = React.createElement(
  "div",
  { id: "heading" },
  "Hello Namaste React!"
);

// JSX => React Element => Object => when rendered(Object) becomes HTML Element
const JSXHeading = <div>JSX heading</div>
console.log(JSXHeading);

const container = React.createElement(
  "div",
  { className: "container" },
  React.createElement("h1", null, "Welcome"),
  React.createElement("p", null, "This is a paragraph.")
);

const nestedStructure = React.createElement(
  "div",
  null,
  React.createElement(
    "header",
    null,
    React.createElement("h1", null, "Header")
  ),
  React.createElement("main", null, React.createElement("p", null, "Content")),
  React.createElement(
    "footer",
    null,
    React.createElement("small", null, "Footer")
  )
);

const fragmentExample = function () {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("h1", null, "Title"),
    React.createElement("p", null, "Description")
  );
};

const App = () => {
  return (
    <div className="border border-amber-300 mx-auto w-6/12 m-10 p-10">
      <h1 className="font-semibold text-2xl text-center">
        Traditional way of writing react components
      </h1>
      {Header}
      {Body}
      {container}
      {nestedStructure}
      {fragmentExample()}
    </div>
  );
};

// const exampleRoot = createRoot(document.getElementById("root"));
// exampleRoot.render(<App />);

// setTimeout(() => {
//   exampleRoot.unmount();
//   console.log("App unmounted!");

//   try {
//     exampleRoot.render(<App />);
//   } catch (err) {
//     console.log(err);
//   }
//   const root = createRoot(document.getElementById("root"));
//   root.render(<App />);
// }, 5000);

const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
