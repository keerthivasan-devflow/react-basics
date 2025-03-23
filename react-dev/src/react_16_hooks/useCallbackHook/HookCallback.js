import React, { useCallback, useState } from "react";
import Button from "./Button.js";
import Click from "./Click.js";
import Title from "./Title.js";

const HookCallback = () => {
  const [age, setAge] = useState(23);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  return (
    <div>
      <h1>Parent Component</h1>
      <Title />
      <Click text="Age" count={age}></Click>
      <Button method={incrementAge}>Increment Age</Button>

      <Click text="salary" count={salary} />
      <Button method={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default HookCallback;
