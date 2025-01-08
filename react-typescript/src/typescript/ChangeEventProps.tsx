import React from "react";

type OnChangeProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const ChangeEventProps = (props: OnChangeProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <label>Enter your name : </label>
      <input type={"text"} value={props.value} onChange={handleInputChange} />
    </div>
  );
};

export default ChangeEventProps;
