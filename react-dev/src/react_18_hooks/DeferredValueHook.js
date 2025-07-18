import { useState, useDeferredValue, useMemo } from "react";

const DeferredValueHook = () => {
  const [text, setInputText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const deferredInput = useDeferredValue(text);

  const list = useMemo(() => {
    let items = [];
    for (let i = 0; i < 8000; i++) {
      items.push(deferredInput);
    }
    return items;
  }, [deferredInput]);

  console.log(`input: ${text} - deferredInput - ${deferredInput}`);

  return (
    <>
      <h1 className="text-3xl font-bold text-center m-10">
        useDeferredValue() Hook Implementation
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
    </>
  );
};

export default DeferredValueHook;
