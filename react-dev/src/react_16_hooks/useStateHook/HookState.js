import React, { useState } from "react";
import Counter from "./Counter";
import FormHandling from "./FormHandling";
import Todo from "./Todo";

const HookState = () => {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <>
      <h1 className="text-3xl font-extrabold text-center m-3">
        useState() Hook Implementation
      </h1>
      <section className="text-center m-3">
        <button
          type="button"
          className="border border-gray-500 text-gray-500 p-3"
          onClick={() => setShowCounter(!showCounter)}
        >
          {showCounter ? "Hide Counter Box" : "Show Counter Box"}
        </button>
      </section>

      <div className="flex flex-wrap justify-start gap-2">
        {showCounter && <Counter />}
        <FormHandling />
        <Todo />
      </div>
    </>
  );
};

export default HookState;
