import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../utils/data.js";

const Container = () => {

  let [restaurantList, setRestaurantList] = useState(restaurantData);
  let [searchText, setSearchText] = useState("");

  let getListOfRestaurants = () => {
    restaurantList = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setRestaurantList(restaurantList);
    // Add one more
  };

  let searchHandler = () => {
    const filteredResult = restaurantList.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setRestaurantList(filteredResult);
    // Add one more
  };

  return (
    <main className="p-4">
      <div className="flex justify-center">
        <input
          type="search"
          placeholder="Enter your favorite restaurant"
          className="w-sm border-2 border-gray-400 p-2 rounded-tl-md rounded-bl-md"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          className="border-2 border-l-0 border-gray-400 p-2 rounded-tr-md rounded-br-md text-gray-400 cursor-pointer"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
      <div className="flex justify-start m-4">
        <button
          className="text-gray-800 rounded-lg cursor-pointer text-xl font-bold"
          onClick={getListOfRestaurants}
        >
          Discover best restaurants on dineout
        </button>
      </div>
      <section className="m-4 flex flex-wrap justify-start gap-5">
        {restaurantList.map((restaurant, index) => (
          <RestaurantCard restaurant={restaurant} key={index} />
        ))}
      </section>
    </main>
  );
};

export default Container;
