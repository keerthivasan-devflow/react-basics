import React, { useState } from "react";
import ChildrenComponent from "./ChildrenComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);
  console.log("Parent Component");
  return (
    <div className="w-[400px] mx-auto">
      <h1 className="text-center font-semibold">Parent Component (Count) - {count} </h1>
      <h1 className="text-center font-semibold">Random - {random} </h1>
      <button
        className="border border-gray-500 text-gray-500 px-3"
        onClick={() => setCount(count + 1)}
      >
        Increment Child Count
      </button>
      <button
        className="border border-gray-500 text-gray-500 px-3"
        onClick={() => setRandom(random + 1)}
      >
        Change Random State
      </button>
      <ChildrenComponent count={count} />
    </div>
  );
};

export default ParentComponent;
