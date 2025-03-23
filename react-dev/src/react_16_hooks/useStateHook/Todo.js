import React, { useState } from "react";

const Todo = () => {
  let [favorite, setFavorite] = useState("");
  let [listOfFavorites, setListOfFavorites] = useState([]);

  const updateFavorite = (favorite) => {
    let favorites = [...listOfFavorites, favorite];
    setListOfFavorites(favorites);
  };

  const removeFavorite = (i) => {
    setListOfFavorites((prevState) => {
      return prevState.filter((_, index) => index !== i);
    });
  };

  return (
    <div className="border border-gray-500 w-[500px] m-3 p-3 text-center">
      <h1 className="font-semibold text-xl m-2">Todo Application</h1>
      <input
        type="text"
        value={favorite}
        name="data"
        placeholder="Enter your favorites"
        onChange={(e) => setFavorite(e.target.value)}
        className="border p-2 border-gray-500 text-gray-500"
      />
      <button
        className="border border-l-0 p-2 border-gray-500 text-gray-500"
        onClick={() => {
          updateFavorite(favorite);
          setFavorite("");
        }}
      >
        Add
      </button>

      {listOfFavorites.map((favorite, index) => (
        <div className="flex gap-2 justify-center" key={index}>
          <p>{favorite}</p>
          <button
            className="border px-3 text-gray-500 border-gray-500"
            onClick={() => removeFavorite(index)}
          >
            Remove Favorite
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
