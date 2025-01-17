import React, { useEffect, useRef } from "react";

function HookRef() {
  let inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>useRef() Hook Implementation</h1>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default HookRef;
