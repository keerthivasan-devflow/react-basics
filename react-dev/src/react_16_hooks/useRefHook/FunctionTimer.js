import { useEffect, useRef, useState } from "react";

const FunctionTimer = () => {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef(null);

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
    <div className="border border-gray-500 w-[300px] p-3">
      <h3 className="text-center font-semibold">Timer - {timer}</h3>
      <button
        className="border border-gray-500 text-gray-500 px-4 py-2 rounded-3xl"
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Stop Timer
      </button>
      {/* <button onClick={() => { clearInterval(interval) }}>Function Clear Interval</button> */}
    </div>
  );
};

export default FunctionTimer;
