import React, { useReducer } from "react";

function SimpleReducer() {
  type StateProps = {
    count: number;
  };

  type ActionProps = {
    // type: string;
    type: "increment" | "decrement";
    payload: number;
  };

  type ResetProps = {
    type: "reset";
  };

  type CombineActionProps = ActionProps | ResetProps

  let initialState = {
    count: 0,
  };

  let reducer = (state: StateProps, action: CombineActionProps) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload };
      case "decrement":
        return { ...state, count: state.count - action.payload };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  let [countValue, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>UseReducer Functionality in Typescript</h1>
      <p>Count: {countValue.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Increment 5</button>
    </div>
  );
}

export default SimpleReducer;
