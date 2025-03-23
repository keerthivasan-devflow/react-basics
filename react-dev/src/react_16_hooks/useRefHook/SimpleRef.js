import React, { useEffect, useRef } from "react";

const SimpleRef = () => {
  let inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="text-center">
      <input
        type="text"
        className="p-3 w-64 border border-gray-500"
        placeholder="Enter your name"
        ref={inputRef}
      />
    </div>
  );
};

export default SimpleRef;
