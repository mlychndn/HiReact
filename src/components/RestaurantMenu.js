import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useParams,
  Link,
} from "react-router-dom";
import { IMG_CDN_URL, RESTAURANT_API } from "../utils/config";
import ShimmerMenu from "./ShimmerMenu";
import { useRestaurant } from "../utils/useRestaurant";
import WidgetCard from "./WidgetCard";

const RestaurantMenu = () => {
  const [filter, setFilter] = useState("Recommended");
  const { id } = useParams();

  const menuData = useRestaurant(id);

  const items = { ...menuData?.menu?.items };

  const itemsArray = Object.values(items);
  const widgets = menuData?.menu?.widgets;

  // console.log(itemsArray);

  return (
    <>
      {!menuData ? (
        <ShimmerMenu />
      ) : (
        <>
          <div className="bg-[#171a29] flex text-white mt-28 h-52  justify-around ">
            <div className="">
              <img
                className="h-44 my-3"
                src={`${IMG_CDN_URL}/${menuData.cloudinaryImageId}`}
                alt=""
              />
            </div>
            <div className=" my-3 ">
              <h3 className="text-2xl font-bold">{menuData.name}</h3>
              <p className="text-lg font-normal text-slate-300 mt-4">
                {menuData.cuisines.join(", ")}
              </p>
              <p className="text-base font-normal text-slate-300">
                {menuData.locality}, {menuData.areaSlug}
              </p>
              <div className="flex justify-between text-slate-300 ">
                <div>
                  <h3 className="font-bold">{menuData.avgRating}</h3>
                  <p className="font-thin text-sm">
                    {menuData.totalRatingsString}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    {menuData?.sla.slaString.toLowerCase()}
                  </h4>
                  <p className="font-thin text-sm">{`delivery time`}</p>
                </div>
                <div>
                  <h4 className="font-bold">
                    {menuData.costForTwoMsg.split(" ")[0]}
                  </h4>
                  <p className="font-thin text-sm">
                    {menuData.costForTwoMsg.split(" ")[1]}{" "}
                    {menuData.costForTwoMsg.split(" ")[2]}
                  </p>
                </div>
              </div>
            </div>
            <div className="my-6 p-4 px-6 border-4 border-white">
              {menuData.offerMeta.map((offer) => (
                <h3 key={Math.random()}>{offer.header}</h3>
              ))}
            </div>
          </div>
          <div className="flex justify-around  ">
            <div className="p-3 my-3 border-solid  border-slate-600">
              {widgets.map((widget) => (
                <Link
                  className=" hover:text-orange-400"
                  onClick={() => {
                    console.log("clicked", widget);
                    setFilter(widget.name);
                  }}
                >
                  <div>{widget.name}</div>
                </Link>
              ))}
            </div>
            <WidgetCard itemsArray={itemsArray} filter={filter} />
          </div>
        </>
      )}
    </>
  );
};

export default RestaurantMenu;
