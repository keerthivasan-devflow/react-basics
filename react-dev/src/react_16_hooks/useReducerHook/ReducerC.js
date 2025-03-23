import React, { useContext } from "react";
import { ContextReducer } from "./CounterReducer";

const ReducerC = () => {
  const context = useContext(ContextReducer);
  return (
    <div>
      <h1 className="text-center">
        Complex Reducer functionality for counter operation.
      </h1>
      <p className="text-center">Reducer C</p>
      <p className="text-center">Counter : {context.countValue}</p>
      <div className="flex gap-4 justify-center">
        <button
          className="border px-4 py-2"
          onClick={() => {
            context.countMethod("increment");
          }}
        >
          Increment
        </button>
        <button
          className="border px-4 py-2"
          onClick={() => {
            context.countMethod("decrement");
          }}
        >
          Decrement
        </button>
        <button
          className="border px-4 py-2"
          onClick={() => {
            context.countMethod("reset");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ReducerC;
