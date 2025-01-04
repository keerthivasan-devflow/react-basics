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
