import { useState } from "react";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = () => {
    setTodos((prevTodo) => [...prevTodo, inputText]);
    setInputText("");
  };

  const removeItem = (index) => {
    setTodos(todos.filter((_, item) => item !== index));
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-center text-2xl"> TODO application</h1>

      <section>
        <input
          className="border px-3 w-64"
          type="text"
          value={inputText}
          onChange={onChangeHandler}
        />
        <button onClick={submitHandler}>Submit</button>
      </section>

      {todos.map((todo, index) => (
        <section className="flex gap-4 justify-center">
          <p key={index}>{todo}</p>
          <button className="border px-3 cursor-pointer">Add</button>
          <button
            className="border px-3 cursor-pointer"
            onClick={() => removeItem(index)}
          >
            Remove
          </button>
          <button className="border px-3 cursor-pointer">Remove All</button>
        </section>
      ))}
    </div>
  );
};

export default Todo;
