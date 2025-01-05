import RestaurantCard from "./RestaurantCard"
import Search from "./Search"
import data from "../utils/restaurant.json"

const Container = () => {
  return (
    <main className="main-content">
      <Search />
      <div className="restaurant-list">
        {data.map((restaurant) => (
          <RestaurantCard
            restaurantData={restaurant}
            key={restaurant.restaurantName}
          />
        ))}
      </div>
    </main>
  );
};

export default Container