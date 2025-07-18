import React, { useCallback, useState } from "react";
import Button from "./Button";
import View from "./View";
import Title from "./Title";

const HookCallback = () => {
  const [age, setAge] = useState(23);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  // const incrementAge = () => {
  //   setAge(age + 1);
  // };

  // const incrementSalary = () => {
  //   setSalary(salary + 10000);
  // };

  return (
    <div className="border border-gray-500 w-[500px] mx-auto">
      <h1 className="font-semibold text-center text-2xl">
        useCallback() Root Component
      </h1>
      <section className="text-center m-4">
        <Title />
        <View text="Age" count={age} />
        <Button method={incrementAge}>Increment Age</Button>

        <View text="salary" count={salary} />
        <Button method={incrementSalary}>Increment Salary</Button>
      </section>
    </div>
  );
};

export default HookCallback;
