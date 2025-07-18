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
  }, [firstCount]);

  return (
    <section className="border p-3 w-[500px] mx-auto">
      <h2 className="font-semibold text-center m-2">Counter</h2>

      <div className="flex justify-around space-x-4">
        <article>
          <h3>First Count - {firstCount}</h3>
          <button
            type="button"
            className="border px-2 rounded-xl border-gray-300 font-semibold"
            onClick={IncrementFirstCount}
          >
            1st Counter
          </button>
        </article>
        <article>
          <h3>Second Count - {SecondCount}</h3>
          <button
            type="button"
            className="border px-2 rounded-xl border-gray-300 font-semibold"
            onClick={incrementSecondCount}
          >
            2nd Counter
          </button>
        </article>
      </div>
      <p className="text-center">Result - {isEven ? "Even" : "Odd"}</p>
    </section>
  );
};

export default HookMemo;
