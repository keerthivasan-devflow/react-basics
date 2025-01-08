import React, { useEffect, useRef, useState } from "react";

const SimpleRef = () => {
  //   const inputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null!);

  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // inputRef.current?.focus();
    inputRef.current.focus();
  });

  const stopTimer = () => {
    window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <form>
        <label htmlFor="username">Enter your name : </label>
        <input type={"text"} id="username" ref={inputRef} />

        <p>Timer Value : {timer}</p>
        <button onClick={() => stopTimer}>Stop Timer</button>
      </form>
    </div>
  );
};

export default SimpleRef;
