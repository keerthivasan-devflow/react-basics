import { useState } from "react";
import RestaurantCard, { withpromotedLabel } from "./RestaurantCard";
import { useRestaurant } from "../utils/useRestaurant";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import Spinner from "./Spinner";
import Topbar from "./Topbar";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  let [restaurantList, filteredRestaurants, setFilteredRestaurants] =
    useRestaurant();

  const onlineStatus = useOnlineStatus();
  const PromotedRestaurantCard = withpromotedLabel(RestaurantCard);

  const getListOfRestaurants = () => {
    restaurantList = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );
    setFilteredRestaurants(restaurantList);
  };

  const searchHandler = () => {
    const filteredResults = restaurantList.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filteredResults);
  };

  if (onlineStatus === false)
    return <h1>Looks like you're offline, check your internet connection!</h1>;

  if (filteredRestaurants.length === 0) {
    return <Spinner />;
  }

  return (
    <main className="p-4 m-2 relative">
      <div className="flex justify-center">
        <input
          type="search"
          placeholder="Enter your favorite restaurant"
          className="w-sm border-2 border-gray-300 p-2 rounded-tl-md rounded-bl-md"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          className="border-2 border-l-0 border-gray-300 text-neutral-500 p-2 rounded-tr-md rounded-br-md cursor-pointer"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
      <div className="flex justify-start m-4">
        <button
          className="text-gray-800 rounded-lg cursor-pointer text-xl font-bold hover:underline"
          onClick={getListOfRestaurants}
        >
          Discover best restaurants on dineout
        </button>
      </div>
      <section className="m-4 flex flex-wrap justify-start gap-5">
        {filteredRestaurants.map((restaurant) => (
          <>
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <PromotedRestaurantCard
                restaurant={restaurant}
                key={restaurant?.info?.id}
              />
            ) : (
              <RestaurantCard
                restaurant={restaurant}
                key={restaurant?.info?.id}
              />
            )}
          </>
        ))}
      </section>
      <Topbar />
    </main>
  );
};

export default Body;
