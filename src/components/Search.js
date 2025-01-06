import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const GetSearchTextFromUser = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <input
        type="search"
        id="search"
        className="search-input"
        placeholder="Search your favorite restaurant"
        value={searchText}
        onChange={GetSearchTextFromUser}
      />
      <button
        type="button"
        id="search-btn"
        className="btn search-btn"
        onClick={() => {}}
      >
        Search
      </button>
    </>
  );
};

export default Search;
