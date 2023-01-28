import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("true");

  const toggleLogin = () => {
    login === "true" ? setLogin("false") : setLogin("true");
  };

  return (
    <div className="flex justify-between bg-orange-500 h-24 shadow-xl  fixed top-0 left-0 right-0">
      <a href="/">
        <img
          src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
          alt="logo"
          className="h-4/5 mx-2 my-2"
        />
      </a>

      <ul className="flex">
        <Link to="/" className="mr-3 my-5 py-2 text-white">
          <li className="text-2xl">Home</li>
        </Link>
        <Link to="/about" className="mr-3 my-5 py-2 text-white">
          <li className="text-2xl">About</li>
        </Link>
        <Link to="/contact" className="mr-3 my-5 py-2 text-white ">
          <li className="text-2xl">Contact</li>
        </Link>
        <Link to="/instamart" className="mr-3 my-5 py-2 text-white">
          <li className="text-2xl">Instamart</li>
        </Link>
      </ul>

      <button
        className="mr-3 my-5 py-2 text-black text-xl rounded-full w-28 h-12 bg-white text-center"
        onClick={toggleLogin}
      >
        {login === "true" ? "Login" : "Logout"}
      </button>
    </div>
  );
};

export default Header;
