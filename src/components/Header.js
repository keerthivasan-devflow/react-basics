import { useState } from "react";
import logo from "../../images/logo.webp";
import { Link } from "react-router";

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  
  const handleAuthentication = () => {
    setLoggedIn((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img
          className="logo"
          src={logo}
          alt="Logo"
          title="Logo"
          width="100"
          height="100"
        />
      </div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to={"/"} className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={"/about"} className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={"/contact"} className="navbar-link">
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={"/cart"} className="navbar-link">
              Cart
            </Link>
          </li>
          <li className="navbar-item" onClick={handleAuthentication}>
            <Link to={"/login"} className="navbar-link">
              {isLoggedIn ? "Login" : "Logout"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
