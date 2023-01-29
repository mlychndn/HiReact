import { IMG_CDN_URL } from "../utils/config";

const WidgetCard = (props) => {
  const { itemsArray } = props;
  const recommendedArray = itemsArray.filter((item) => item.recommended === 1);
  console.log(recommendedArray);
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
            <img
              className="h-28 w-28"
              src={`${IMG_CDN_URL}${item.cloudinaryImageId}`}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WidgetCard;
