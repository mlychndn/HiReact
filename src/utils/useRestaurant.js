import { useState, useEffect } from "react";
import { RESTAURANT_API, ALL_RESTAURANT_API } from "./config";

export const useRestaurant = (id) => {
  const [menuData, setMenuData] = useState("");

  const getRestaurantMenu = async () => {
    const response = await fetch(RESTAURANT_API.replace("{ID}", id));
    const data = await response.json();

    setMenuData(data.data);
  };

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  return menuData;
};

export const useRestaurantData = () => {
  console.log("1");
  const [filteredRestaurant, setFilteredRestaurant] = useState("");
  const [allRestaurant, setAllRestaurant] = useState("");

  const getRestaurantData = async () => {
    const response = await fetch(ALL_RESTAURANT_API);
    const data = await response.json();
    const restaurantList = data?.data?.cards[2]?.data?.data?.cards;
    setFilteredRestaurant(restaurantList);

    setAllRestaurant(restaurantList);
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  return [filteredRestaurant, allRestaurant, setFilteredRestaurant];
};
