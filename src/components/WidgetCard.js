import { IMG_CDN_URL } from "../utils/config";

const WidgetCard = (props) => {
  console.log("props", props);
  const { itemsArray, filter } = props;
  const recommendedArray = itemsArray.filter((item) => {
    if (filter === "Recommended") {
      return item[filter.toLowerCase()] === 1;
    } else {
      return item.category === filter;
    }
  });
  console.log("rec", recommendedArray);
  return (
    <div>
      {recommendedArray.map((item) => (
        <div
          className="flex justify-between my-3 mx-3 p-3 border-2 border-y-orange-500 "
          key={item.id}
        >
          <div>
            <h1>{item.name}</h1>
            <p>₹ {Number(item.price) / 100}</p>
          </div>

          <div>
            {!item.cloudinaryImageId ? (
              ""
            ) : (
              <img
                className="h-28 w-28"
                src={`${IMG_CDN_URL}${item.cloudinaryImageId}`}
                alt=""
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WidgetCard;
