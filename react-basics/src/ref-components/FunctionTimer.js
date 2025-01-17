import React, { useEffect, useRef, useState } from "react";

const FunctionTimer = () => {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    // const interval = setInterval(() => { setTimer(timer => timer + 1) }, 1000)
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      // clearInterval(interval)
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h3>Timer Value : {timer}</h3>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Function Clear Interval
      </button>
      {/* <button onClick={() => { clearInterval(interval) }}>Function Clear Interval</button> */}
    </div>
  );
};

export default FunctionTimer;
