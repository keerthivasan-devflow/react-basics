import React from "react";

const ForwardRefComponent = React.forwardRef((props, ref) => {
  return (
    <div>
      <h1>{props.state}</h1>
      <label>Enter name input field: </label>
      <input type={"text"} ref={ref} />
    </div>
  );
});

export default ForwardRefComponent;
