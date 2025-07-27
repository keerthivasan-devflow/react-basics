import { useEffect, useState } from "react";

const Demo = () => {
  function initializeCount() {
    return 0;
  }

  const [count, setCount] = useState(initializeCount);
  const [name, setName] = useState("Keerthi");

  const clickHandler = () => {
    setCount(count + 1);
    setName("Keerthivasan");
    console.log("Inside Handler: ", name);
  };

  useEffect(() => {
    console.log("useEffect: ", name);
  }, [name]);

  console.log("Inside body : ", name);
  console.log("demo component is rendering...");

  return (
    <>
      <h1> Demo Application</h1>
      <p>{count}</p>
      <p>{name}</p>
      <button className="border cursor-pointer" onClick={clickHandler}>
        Click
      </button>
    </>
  );
};

export default Demo;
