import React from "react";

const Button = ({ method, children }) => {
  console.log(`${children} is invoked`);
  return (
    <button className="border border-gray-500 px-4 py-2 rounded-4xl cursor-pointer text-gray-500" onClick={method}>
      {children}
    </button>
  );
};

export default React.memo(Button);
// export default Button;
