import { useEffect, useState } from "react";
import { RESTAURANT_DATA } from "./constants";

export let useRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState([]); // To filter out the restaurants, will use this variable.
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // To update the UI after filteration.

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    try {
      let data = await fetch(RESTAURANT_DATA);
      let json = await data.json();
      let restaurantList =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantList(restaurantList);
      setFilteredRestaurants(restaurantList); // Added extra
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return [restaurantList, filteredRestaurants, setFilteredRestaurants];
};
