import React, { useReducer } from "react";

const ComplexReducer = () => {
  const initialValue = {
    firstCounter: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, firstCounter: state.firstCounter + action.payload };
      case "decrement":
        return { ...state, firstCounter: state.firstCounter - action.payload };
      case "reset":
        return initialValue;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="border w-[500px] p-3">
      <h1 className="text-center font-semibold text-xl">Complex Reducer</h1>
      <h3 className="text-center">Count: {count.firstCounter} </h3>
      <button
        className="border px-4 py-2"
        onClick={() => {
          dispatch({ type: "increment", payload: 5 });
        }}
      >
        Increment
      </button>
      <button
        className="border px-4 py-2"
        onClick={() => {
          dispatch({ type: "decrement", payload: 2 });
        }}
      >
        Decrement
      </button>
      <button
        className="border px-4 py-2"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
    </div>
  );
};

export default ComplexReducer;
