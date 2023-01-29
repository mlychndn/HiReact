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
    <div className="w-80 max-h-96 m-4 p-2 hover:shadow-lg">
      <img className="m-1" src={imgUrl} alt="" />
      <h2 className="text-xl text-center mt-3">{name}</h2>
      <p className="ml-3">{cuisinesData}</p>
      <div className="ml-3"> {`${avgRating} ⭐`}</div>
      <div className="ml-3"> {lastMileTravelString}</div>
      <div className="ml-3"> {costForTwoString}</div>
    </div>
  );
};

export default RestaurantCard;
