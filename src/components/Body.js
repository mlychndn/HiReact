import restaurantData, { IMG_CDN_URL } from "../utils/config";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import Search from "./Search";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    lastMileTravelString,
    costForTwoString,
  } = props.details;
  const imgUrl = `${IMG_CDN_URL}${cloudinaryImageId}
  `;
  const cuisinesData = cuisines.join(" ,");

  return (
    <div className="restaurant-card">
      <img className="food-img" src={imgUrl} alt="" />
      <h2 className="restaurant-name">{name}</h2>
      <p className="restaurant-name">{cuisinesData}</p>
      <div className="restaurant-rating"> ⭐{avgRating}</div>
      <div className="restaurant-rating"> {lastMileTravelString}</div>
      <div className="restaurant-rating"> {costForTwoString}</div>
    </div>
  );
};

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.45242&lng=78.33159289999999&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const restaurantList = data?.data?.cards[2]?.data?.data?.cards;
    setFilteredRestaurant(restaurantList);
    setAllRestaurant(restaurantList);
  };

  const getRestaurantList = (data) => {
    setFilteredRestaurant(data);
  };

  return (
    <div>
      <Search allRestaurant={allRestaurant} filterHandler={getRestaurantList} />
      {filteredRestaurant.length === 0 ? (
        <div className="shimmer-container">
          <ShimmerUi />
        </div>
      ) : (
        <div className="restaurant-container">
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard
              details={restaurant.data}
              key={restaurant.data.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
