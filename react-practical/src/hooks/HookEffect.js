import React, { useEffect, useState } from "react";
import "../assets/css/main.css";
import axios from "axios";

let HookEffect = () => {
  let [count, setCount] = useState(0);
  let [name, setName] = useState({ firstname: "" });
  let [posts, setPosts] = useState([]);
  let [users, getUsers] = useState({});
  let [userId, setUserId] = useState();
  let [buttonUserId, setButtonUserId] = useState()

  let incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  let UpdateName = (event) => {
    setName({ ...name, firstname: event.target.value });
  };

  let userHandler = (event) => {
    setUserId(event.target.value);
  };

  useEffect(() => {
    document.title = `ueEffect() clicked ${count} times`;
    console.log("useEffect updating ...");
  }, [count]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => getUsers(response.data))
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <div className="flex-container">
      <section className="flex-item">
        <h2>Task 1: To cause side effects</h2>
        <p>Count {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </section>
      <section className="flex-item">
        <h2>Task 2: Working w/ form elements</h2>
        <input
          type="text"
          value={name.firstname}
          onChange={UpdateName}
          placeholder="Enter any username"
        />
      </section>

      <section className="flex-item">
        <h2>Task 3: Fetching data from endpoint</h2>
        <ul>
          {posts.map(
            (post) =>
              post.id <= 25 && (
                <li>
                  {post.id}. {post.title}
                </li>
              )
          )}
        </ul>
      </section>

      <section className="flex-item">
        <h2>Task 3: Fetching data from endpoint</h2>
        <input type="text" value={userId} onChange={userHandler} />
        <p>
          {users.id} {users.email}
        </p>
      </section>
    </div>
  );
};

export default HookEffect;
