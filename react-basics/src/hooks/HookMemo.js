import React, { useMemo, useState } from "react";

const HookMemo = () => {
  const [firstCount, setFirstCount] = useState(1);
  const [SecondCount, setSecondCount] = useState(1);
  const IncrementFirstCount = () => {
    setFirstCount(firstCount + 1);
  };

  const incrementSecondCount = () => {
    setSecondCount(SecondCount + 1);
  };

  // const isEven = useMemo(() => {
  //   let i = 0;
  //   while (i < 1234567890) i++;
  //   return firstCount % 2 == 0;
  // }, []);

  let isEven = useMemo(() => {
    let i = 0;
    while (i < 1234567890) i++;
    return firstCount % 2 == 0;
  },[firstCount]);

  return (
    <div>
      <h3>First Count : {firstCount}</h3>
      <button onClick={IncrementFirstCount}>First Increment</button>
      <p>
        <i>Even or Odd: {isEven ? "Even" : "Odd"}</i>
      </p>

      <h3>Second Count : {SecondCount}</h3>
      <button onClick={incrementSecondCount}>Second Increment</button>
    </div>
  );
};

export default HookMemo;
