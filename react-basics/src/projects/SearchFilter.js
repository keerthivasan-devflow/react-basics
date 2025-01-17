// 0.00 starts with list component - Lama Dev
// 7.00 table component
// 15.30 search content from API Backend server
import React, { useState } from "react";
import "../assets/css/styles.css";
import { users } from "../data/users.js";

const SearchFilter = () => {
  const [query, searchQuery] = useState("");
  const getInput = (event) => {
    searchQuery(() => event.target.value);
  };

  return (
    <React.Fragment>
      <h2>Search Filter Functionality</h2>
      <input
        type="search"
        placeholder="Search your query"
        id="search-input"
        className="input-field-search"
        value={query}
        onChange={getInput}
      />

      <ul className="users-list">
        {users
          .filter((user) => user.first_name.toLocaleLowerCase().includes(query))
          .map((user) => (
            <li className="user-list-item" key={user.id}>
              {user.first_name}
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default SearchFilter;
