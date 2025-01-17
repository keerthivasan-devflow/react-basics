import React, { useState } from "react";
import  "../assets/css/main.css"

const HookState = () => {
  const [count, setCount] = useState(0);
  const [isCompleted, setStatus] = useState(true);
  const [color, setColor] = useState("grey");
  const [user, setUser] = useState({ firstname: "", lastname: "" });
  const [product, addProduct] = useState("");
  const [products, addProducts] = useState([]);

  const updateCount = () => {
    setCount(count + 1);
  };

  const updateCountFive = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const updateStatus = () => {
    setStatus((status) => !status);
  };

  const updateColor = (colorname) => {
    setColor(colorname);
  };

  const updateUserDetails = (event) => {
    setUser((user) => {
      return {
        ...user,
        [event.target.name]: event.target.value,
      };
    });
  };

  const getProduct = (event) => {
    addProduct(event.target.value);
  };

  const getProducts = () => {
    addProducts([...products, product]);
    addProduct("");
  };

  return (
    <>
      <h2>Hook State Component</h2>
      <div className="flex-container">
        <section className="flex-item">
          <h2>Task 1: Increment Count Functionality</h2>
          <button onClick={updateCount}>count by 1 - {count}</button>
          <button onClick={updateCountFive}>count by 5 - {count}</button>
        </section>

        <section className="flex-item">
          <h2>Task 2: Form Handling Features</h2>
          <form method="get" name="login">
            <input
              type="text"
              value={user.firstname}
              name="firstname"
              onChange={updateUserDetails}
              placeholder="Enter your firstname"
            />
            <input
              type="text"
              value={user.lastname}
              name="lastname"
              onChange={updateUserDetails}
              placeholder="Enter your lastname"
            />
            <p>{JSON.stringify(user)}</p>
          </form>
        </section>

        <section className="flex-item">
          <h2>Task 3: Toggle Status Functionality</h2>
          <p>{isCompleted ? "You're completed!" : ""}</p>
          <button onClick={updateStatus}>
            {isCompleted ? "Ok" : "Visit to back!"}
          </button>
        </section>

        <section className="flex-item">
          <h2>Task 4: Color Picker Functionality</h2>
          <button onClick={() => updateColor("grey")}>grey</button>
          <button onClick={() => updateColor("green")}>green</button>
          <button onClick={() => updateColor("red")}>red</button>
          <h2 style={{ backgroundColor: color }}>Hello, I am there!</h2>
        </section>

        <section className="flex-item">
          <h2>Task 5: Adding data (products) dynamically</h2>
          <input type="text" value={product} onChange={getProduct} placeholder="Enter any products name to be added" />
          <button onClick={getProducts}>Add Products</button>
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default HookState;
