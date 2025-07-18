import { useEffect, useRef } from "react";

const SimpleRef = () => {
  
  let inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <input
      type="text"
      className="p-1 w-64 border border-gray-500"
      placeholder="Enter your name"
      ref={inputRef}
    />
  );
};

export default SimpleRef;
