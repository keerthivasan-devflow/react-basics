import React, { useReducer } from "react";

let SimpleReducer = () => {
  let initialState = "Hello Keerthi";

  const reducer = (state, action) => {
    switch (action.type) {
      case "uppercase":
        return state.toUpperCase();
      case "lowercase":
        return state.toLowerCase();
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="border w-[500px] p-3">
      <h1 className="text-center font-semibold text-xl">Simple Reducer</h1>
      <p className="text-center">{state}</p>
      <div className="flex gap-4 justify-center">
        <button className="border px-4 py-2" onClick={() => dispatch({ type: "uppercase" })}>uppercase</button>
        <button className="border px-4 py-2" onClick={() => dispatch({ type: "lowercase" })}>lowercase</button>
      </div>
    </div>
  );
};

export default SimpleReducer;
