import ShimmerUi from "./ShimmerUi";
import Search from "./Search";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { useRestaurantData } from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [filteredRestaurant, allRestaurant, setFilteredRestaurant] =
    useRestaurantData();

  const getRestaurantList = (data) => {
    setFilteredRestaurant(data);
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <div>
        <h1>You seems offline ⛔</h1>
      </div>
    );
  }

  return (
    <div className="mt-24">
      <Search allRestaurant={allRestaurant} filterHandler={getRestaurantList} />
      {filteredRestaurant.length === 0 ? (
        <div className="shimmer-container">
          <ShimmerUi />
        </div>
      ) : (
        <div className=" mx-3 flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            <Link
              to={restaurant.data.id}
              className="restaurant-link"
              key={restaurant.data.id}
            >
              <RestaurantCard details={restaurant.data} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
