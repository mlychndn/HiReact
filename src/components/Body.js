import restaurantData, { IMG_CDN_URL } from "../utils/config";
import { useState } from "react";

const getFilterValue = (searchText, setSearchText) => {
  // console.log(restaurantData.cards);
  let filterRestaurant = [...restaurantData.cards];
  filterRestaurant = filterRestaurant.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  setSearchText("");
  return filterRestaurant;
};

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const [initialValue, setInitialValue] = useState("true");

  const getSearchValue = (e) => {
    setSearchText(e.target.value);
  };

  const checkToggle = () => {
    initialValue === "true"
      ? setInitialValue("false")
      : setInitialValue("true");
  };

  return (
    <>
      <input
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={getSearchValue}
      />
      <button
        onClick={() => {
          props.setRestaurants(getFilterValue(searchText, setSearchText));
        }}
      >
        Search
      </button>

      <div>
        <h1>{initialValue}</h1>
      </div>
      <button onClick={checkToggle}>Change </button>
    </>
  );
};

const Card = ({ name, id, cloudinaryImageId, cuisines, avgRating }) => {
  const imgUrl = `${IMG_CDN_URL}${cloudinaryImageId}`;
  return (
    <div className="card">
      <img src={imgUrl} alt="food-img" />
      <h3>{name}</h3>
      <div>{cuisines?.join(", ")}</div>
      <p>{avgRating}⭐</p>
    </div>
  );
};

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantData.cards);
  return (
    <>
      <Search restaurants={restaurants} setRestaurants={setRestaurants} />
      <div className="card-container">
        {restaurants.map((restaurant) => (
          <Card {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
