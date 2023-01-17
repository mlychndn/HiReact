import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/config";
import ShimmerMenu from "./ShimmerMenu";
const RestaurantMenu = () => {
  const params = useParams();
  const [menuData, setMenuData] = useState("");

  const getRestaurantMenu = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=17.45242&lng=78.33159289999999&menuId=${params.id}`
    );
    const data = await response.json();
    console.log(data);
    setMenuData(data.data);
  };

  useState(() => {
    getRestaurantMenu();
  }, []);

  const items = { ...menuData?.menu?.items };

  const itemsArray = Object.values(items);
  console.log(itemsArray);

  return (
    <>
      {!menuData ? (
        <ShimmerMenu />
      ) : (
        <>
          <div className="menu-card">
            <div className="menu-image">
              <img
                className="menu-ref-img"
                src={`${IMG_CDN_URL}/${menuData.cloudinaryImageId}`}
                alt=""
              />
            </div>
            <div className="menu-restaurant-name">
              <h3>{menuData.name}</h3>
              <p>{menuData.cuisines.join(", ")}</p>
              <p>{menuData.locality} </p>
              <div className="mini-card">
                <div class="mini-grid-card">
                  <h4>{menuData.avgRating}</h4>
                  <p>{menuData.totalRatingsString}</p>
                </div>
                {/* <div class="mini-grid-card">
                  <h4>{menuData.avgRating}</h4>
                  <p>{menuData.totalRatingsString}</p>
                </div> */}
                <div className="mini-grid-card">
                  <h4>{menuData.costForTwoMsg.split(" ")[0]}</h4>
                  <p>
                    {menuData.costForTwoMsg.split(" ")[1]}{" "}
                    {menuData.costForTwoMsg.split(" ")[2]}
                  </p>
                </div>
              </div>
            </div>
            <div className="menu-offer">
              {menuData.offerMeta.map((offer) => (
                <h3 key={Math.random()}>{offer.header}</h3>
              ))}
            </div>
          </div>
          <div className="menu-details">
            <h3 className="menu-header">Recommended</h3>
            <p className="menu-header">
              {`${Object.values(menuData.menu.items).length} items`}{" "}
            </p>
            <ul>
              {itemsArray.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default RestaurantMenu;
