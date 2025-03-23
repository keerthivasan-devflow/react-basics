import { createElement } from "react";

const Body = createElement("section", { className: "text-gray-500 m-2" }, [
  createElement("p", { id: "para" }, "This is my paragraph context"),
  createElement(
    "a",
    { href: "#", target: "_blank", className: "text-blue-500" },
    "Learn More"
  ),
]);

export default Body;
