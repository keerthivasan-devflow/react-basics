import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import data from "../utils/restaurant.json";
import { useState } from "react";

const Container = () => {
  const [state, updateState] = useState(data);
  const getTopRatedRestaurants = () => {
    const resultantList = data.filter((res) => res.ratings > 4.0);
    updateState(resultantList);
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
        <Search />
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
