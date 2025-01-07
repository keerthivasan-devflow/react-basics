import RestaurantCard from "./RestaurantCard";
import data from "../utils/restaurant.json";
import { useEffect, useState } from "react";

const Container = () => {
  const [state, updateState] = useState(data);
  const [searchText, setSearchText] = useState("");

  const getTopRatedRestaurants = () => {
    const resultantList = data.filter((res) => res.ratings > 4.0);
    updateState(resultantList);
  };

  const fetchAPI = async () => {
    const restaurant = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await restaurant.json();
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const GetSearchTextFromUser = (event) => {
    setSearchText(event.target.value);
  };

  const FilteredList = () => {
    const filteredRestaurants = data.filter((res) => res.restaurantName.toLocaleLowerCase().includes(searchText));
    updateState(filteredRestaurants);
  };

  return (
    <main className="main-content">
      <div className="button-search-container">
        <button
          type="button"
          id="top-rated-btn"
          className="btn top-rated-btn"
          onClick={getTopRatedRestaurants}
        >
          Top Rated Restaurants
        </button>
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
          onClick={FilteredList}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {state.map((restaurant) => (
          <RestaurantCard
            restaurantData={restaurant}
            key={restaurant.restaurantName}
          />
        ))}
      </div>
    </main>
  );
};

export default Container;
