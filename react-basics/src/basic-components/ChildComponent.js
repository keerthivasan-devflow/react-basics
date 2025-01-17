import React from "react";

const FunctionalChildComponent = (props) => {
  return (
    <div>
      <p>
        Rendering parent's component's props here. I mean I have passed the
        parent state as a prop to child component that is ....{" "}
        {props.message}
      </p>
      <button
        onClick={() => {
          props.clickHandler("Lakshashree");
        }}
      >
        Child Button
      </button>
    </div>
  );
};

export default FunctionalChildComponent;
