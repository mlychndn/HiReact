const ShimmerUi = function () {
  const createdArray = Array(10).fill("");

  return (
    <>
      {createdArray.map((el, idx) => (
        <div className="w-80 h-96 bg-white my-3 mx-3" key={idx}>
          <div className="w-40 h-40 bg-gray"></div>
          <div className="shimmer-card-content"></div>
          <div className="shimmer-card-details"></div>
        </div>
      ))}
    </>
  );
};

export default ShimmerUi;
