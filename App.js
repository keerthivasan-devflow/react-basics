// React Element: h1
// What is React Element - an object

// const h1 = React.createElement(
//   "h1",
//   {
//     id: "header",
//     class: "header-block",
//   },
//   "Hello World from React!"
// );
// console.log("h1: ", h1);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);

// This is actually the core of React but really cumbersome. So JSX introduced in React which will
// help our life is more easier than expected, when we wanted to create HTML tags. 
// React is not only possible to write within JSX. we can write it like below too.
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a child-1 header"),
    React.createElement("p", { class: "content" }, "I am a child-1 paragraph"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a child-2 header"),
    React.createElement("p", {}, "I am a child-2 paragraph"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);