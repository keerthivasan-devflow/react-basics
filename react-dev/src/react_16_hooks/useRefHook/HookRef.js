import React from "react";
import SimpleRef from "./SimpleRef";
import FunctionTimer from "./FunctionTimer";

const HookRef = () => {
  return (
    <>
      <SimpleRef />
      <div className="flex justify-start mt-4">
        <FunctionTimer />
      </div>
    </>
  );
};

export default HookRef;
