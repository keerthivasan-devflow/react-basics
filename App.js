// React Element: h1
// What is React Element - an object
const h1 = React.createElement(
  "h1",
  {
    id: "header",
    class: "header-block",
  },
  "Hello World from React!"
);
console.log("h1: ", h1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);
