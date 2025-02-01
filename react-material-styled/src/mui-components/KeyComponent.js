import React from "react";
import ReactDOM from "react-dom";

// Parent component
function KeyComponent() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item, index) => (
        <ChildComponent key={index} item={item} />
      ))}
    </ul>
  );
}

// Child component
function ChildComponent({ item, key }) {
  // Trying to access the key prop here will not work
  // const key = this.props.key; // This will not work
console.log("Key Props: ", key)
  return (
    <li>
      {item}
      {/* key is not available here */}
    </li>
  );
}

export default KeyComponent