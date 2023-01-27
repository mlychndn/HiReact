const ShimmerUi = function () {
  const createdArray = Array(10).fill("");

  return (
    <>
      {createdArray.map((el, idx) => (
        <div className="shimmer-card" key={idx}>
          <div className="shimmer-card-img"></div>
          <div className="shimmer-card-content"></div>
          <div className="shimmer-card-details"></div>
        </div>
      ))}
    </>
  );
};

export default ShimmerUi;
