import { useState, useTransition } from "react";

const TransitionHook = () => {
  const [text, setInputText] = useState("");
  const [list, setList] = useState([]);
  const [isTransition, startTransition] = useTransition();

  const handleInput = (e) => {
    setInputText(e.target.value);

    let items = [];
    for (let i = 0; i < 5000; i++) {
      items.push(e.target.value);
    }

    startTransition(() => setList(items));
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center m-10">
        useTransition() Hook Implementation
      </h1>
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Enter the value"
          className="w-64 border border-gray-300 px-3"
          value={text}
          onChange={handleInput}
        />
      </div>

      {isTransition ? (
        "Loading..."
      ) : (
        <div className="m-3">
          {list.map((item, index) => (
            <button
              type="button"
              className="bg-blue-900 text-white font-bold px-3 m-3"
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default TransitionHook;
