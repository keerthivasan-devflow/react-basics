import React from "react";
import SimpleReducer from "./SimpleReducer";
import ComplexReducer from "./ComplexReducer";
import ComplexReducerTwo from "./ComplexReducerTwo";
import ReducerFetchData from "./ReducerFetchData";
import CounterReducer from "./CounterReducer";

const HookReducer = () => {
  return (
    <div className="flex flex-wrap justify-start gap-4">
      <SimpleReducer />
      <ComplexReducer />
      <ComplexReducerTwo />
      <ReducerFetchData />
      <CounterReducer />
    </div>
  );
};

export default HookReducer;
