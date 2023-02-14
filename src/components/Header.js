import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState("true");
  const { user } = useContext(UserContext);
  const { name, mail } = user;

  const toggleLogin = () => {
    login === "true" ? setLogin("false") : setLogin("true");
  };

  return (
    <div className="flex justify-between bg-orange-500 h-20 shadow-xl  fixed top-0 left-0 right-0">
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

      <h3>
        {name}-{mail}
      </h3>
      <button
        className="mr-3 my-5  text-black text-sm rounded-full w-24 h-8 bg-white text-center font-medium hover:bg-slate-500"
        onClick={toggleLogin}
      >
        {login === "true" ? "Login" : "Logout"}
      </button>
    </div>
  );
};

export default Header;
