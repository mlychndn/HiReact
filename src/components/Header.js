import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("true");

  // const buttonHandler = () => {
  //   setTitle("Naya Title");
  // };
  const toggleLogin = () => {
    login === "true" ? setLogin("false") : setLogin("true");
    // const url = "http://localhost:3000/api/v1/users/logIn";
    // const data = {
    //   email: "suriyaghosh383@gmail.com",
    //   password: "Yaadhai!123",
    // };
    // const options = {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   mode: "cors",
    //   body: JSON.stringify(data),
    // };
    // fetch(url, options)
    //   .then((res) => {
    //     res.json();
    //   })
    //   .then((d) => {
    //     console.log(d);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  };

  return (
    <div className="header">
      <a href="/">
        <img
          src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
          alt="logo"
        />
      </a>
      {/* <h1>{title}</h1>
      <button onClick={buttonHandler}>change title</button> */}
      <div className="nav">
        <ul className="nav-bar">
          <li>
            <Link to="/" className="nav-list">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-list">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-list">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <button className="login-btn" onClick={toggleLogin}>
        {login === "true" ? "Login" : "Logout"}
      </button>
    </div>
  );
};

export default Header;
