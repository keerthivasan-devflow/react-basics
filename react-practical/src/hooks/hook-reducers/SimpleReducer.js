import React, { useReducer } from "react";

let SimpleReducer = () => {
  // START : You can even place this block of code outside the SimpleReducer Component
  let initialState = 0;
  let reducer = (currentState, action) => {
    switch (action.type) {
      case "increment":
        return currentState + 1;
      case "decrement":
        return currentState - 1;
      case "reset":
        return initialState;
      default:
        return currentState;
    }
  };
  //END

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Simple useReducer() Hook</h1>
      <h3>Count : {state}</h3>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default SimpleReducer;
