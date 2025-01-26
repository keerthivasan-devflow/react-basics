import { useState } from "react";
import logo from "../../images/logo.webp";
import { Link } from "react-router";

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleAuthentication = () => {
    setLoggedIn((prevState) => !prevState);
  };

  return (
    <header className="flex justify-between bg-green-500 m-2 p-4 shadow-lg text-white">
      <div>
        <img className="w-24" src={logo} alt="Logo" title="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-4">
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li className="px-4" onClick={handleAuthentication}>
            <Link to={"/login"}>
              {/* {isLoggedIn ? "Login" : "Logout"} */}
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
