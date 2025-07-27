import { useState } from "react";

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
