import { useState, useEffect } from "react";
import { RESTAURANT_MENU } from "./constants";

export const useRestaurantMenu = (resId) => {
  let [restaurantInfo, setRestaurantInfo] = useState(null);
  
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    let data = await fetch(RESTAURANT_MENU + resId);
    let result = await data.json();
    setRestaurantInfo(result.data);
  };

  return restaurantInfo;
};
