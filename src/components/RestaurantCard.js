import restaurantData, { IMG_CDN_URL } from "../utils/config";

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

export default RestaurantCard;
