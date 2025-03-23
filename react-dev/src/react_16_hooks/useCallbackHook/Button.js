import React from "react";

const Button = ({ method, children }) => {
  console.log(`${children} is clicked`);
  return <button onClick={method}>{children}</button>;
};

export default React.memo(Button);
