import { useRef, useState } from "react";

const StopWatch = () => {
  let startInterval = 0;
  const [timer, setTimer] = useState(startInterval);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    // Once the interval is cleared, there's no reason to keep the ID in memory.(clear stored interval ID)
    // It also helps you check if a timer is already running or not. For example,
    // you might prevent multiple timers from starting by checking if (!intervalRef.current) before calling setInterval.
  };

  const resetTimer = () => {
    setTimer(startInterval);
  };

  const resumeTimer = () => {
    startTimer();
  };

  return (
    <>
      <h1 className="mx-auto w-64">Timer Watch - {timer}</h1>
      <div className="flex justify-center">
        <button className="border px-4 m-3 cursor-pointer" onClick={startTimer}>
          Start
        </button>
        <button className="border px-4 m-3 cursor-pointer" onClick={stopTimer}>
          Stop
        </button>
        <button
          className="border px-4 m-3 cursor-pointer"
          onClick={resumeTimer}
        >
          Resume
        </button>
        <button className="border px-4 m-3 cursor-pointer" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </>
  );
};

export default StopWatch;
