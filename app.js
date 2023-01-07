import React from "react";
import ReactDOM from "react-dom/client";
import restaurantData from "./data";

console.log(restaurantData.cards[0].data.avgRating);

const Header = () => (
  <div className="header">
    <a href="/">
      <img
        src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
        alt="logo"
      />
    </a>
    <div className="nav">
      <ul className="nav-bar">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
);

const Card = ({ name, id, cloudinaryImageId, cuisines, avgRating }) => {
  // console.log(cuisines.join(", "));
  const imgUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`;
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
  return (
    <div className="card-container">
      {restaurantData.cards.map((restaurant) => (
        <Card {...restaurant.data} key={restaurant.data.id} />
      ))}
    </div>
  );
};

const Footer = () => {
  return <h1>footer</h1>;
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
