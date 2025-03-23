import { createElement } from "react";

const name = "Keerthivasan"
const Header = createElement(
  "h1",
  {
    className: "greeting text-gray-500 m-2",
    ref: () => {},
    key: "unique",
  },
  "Hello ",
  createElement("i", null, name),
  ". Welcome!"
);


export default Header;
