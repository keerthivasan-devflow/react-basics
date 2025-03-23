import React, { createContext, useState, useContext, memo } from "react";

const MyContext = createContext();

const Child1 = () => {
  console.log("Child1 rendered");
  const contextValue = useContext(MyContext);
  return <div className="text-center">Child1: {contextValue} </div>;
};

const Child2 = () => {
  console.log("Child2 rendered");
  return <div className="text-center">Child2: I don't use context</div>;
};

const ParentContext = () => {
  const [contextValue, setContextValue] = useState("Initial Context");

  return (
    <div className="border border-gray-500 w-[500px] mx-auto p-4">
      {/* <Child1 /> */}
      <MyContext.Provider value={contextValue}>
        <Child1 />
        <Child2 />
      </MyContext.Provider>

      <button
        onClick={() => setContextValue("Updated Context")}
        className="border border-gray-500 p-3 text-gray-500"
      >
        Update Context
      </button>

    </div>
  );
};

export default ParentContext;
