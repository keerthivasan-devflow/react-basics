import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };

  const updateCountQuintiple = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // However, after one click, count will only be 1 rather than 5!
    // This is because calling the set function does not update the count state variable in the already running code.

    //To solve this problem, you may pass an updater function to setAge instead of the next state:

    // Here, a => a + 1 is your updater function. It takes the pending state and calculates the next state from it.
    // React puts your updater functions in a queue. Then, during the next render, it will call them in the same order:
    //   a => a + 1 will receive 0 as the pending state and return 1 as the next state.
    //   a => a + 1 will receive 1 as the pending state and return 2 as the next state.
    //   a => a + 1 will receive 2 as the pending state and return 3 as the next state.
    //   a => a + 1 will receive 3 as the pending state and return 4 as the next state.
    //   a => a + 1 will receive 4 as the pending state and return 5 as the next state.

    // There are no other queued updates, so React will store 5 as the current state in the end
    // However, if you do multiple updates within the same event, updaters can be helpful.
  };

  return (
    <div className="border border-gray-500 w-[500px] m-3 p-3 text-center">
      <h1 className="font-semibold text-xl m-2">Counter Functionality</h1>
      <p className="m-2">Count - {count}</p>
      <section className="flex gap-2 justify-center">
        <button
          type="button"
          className="border p-2 border-gray-500 text-gray-500"
          onClick={updateCount}
        >
          Increment 1
        </button>
        <button
          type="button"
          className="border p-2 border-gray-500 text-gray-500"
          onClick={updateCountQuintiple}
        >
          Increment 5
        </button>
      </section>
    </div>
  );
};

export default Counter;
