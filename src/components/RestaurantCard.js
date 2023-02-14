import restaurantData, { IMG_CDN_URL } from "../utils/config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

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

  const { user } = useContext(UserContext);

  return (
    <div className="w-80 max-h-96 m-4 p-2 hover:shadow-lg">
      <img className="m-1" src={imgUrl} alt="" />
      <h2 className="text-xl text-center mt-3">{name}</h2>
      <p className="ml-3">{cuisinesData}</p>
      <div className="ml-3"> {`${avgRating} ⭐`}</div>
      <div className="ml-3"> {lastMileTravelString}</div>
      <div className="ml-3"> {costForTwoString}</div>
      <p>
        {user.name}-{user.mail}
      </p>
    </div>
  );
};

export default RestaurantCard;
