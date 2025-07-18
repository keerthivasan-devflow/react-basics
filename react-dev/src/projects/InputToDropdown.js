import { useState } from "react";

const InputToDropdown = () => {
  const [inputText, setInputText] = useState("");
  const [options, setOptions] = useState([]);

  const inputHandler = (e) => {
    let value = e.target.value;
    setInputText(value);
  };

  const submitHandler = () => {
    if (inputText.trim() !== "") {
      setOptions((prevOptions) => [...prevOptions, inputText]);
      setInputText("");
    }
  };

  return (
    <>
      <h1 className="text-center">Input To Dropdown Lists</h1>
      <div className="m-4">
        <input
          className="border px-3 m-2"
          type="text"
          value={inputText}
          onChange={(e) => inputHandler(e)}
        />
        <button className="border px-3" onClick={submitHandler}>
          Submit
        </button>
        <select className="border m-1" id="dropdown">
          <option>-select-</option>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default InputToDropdown;
