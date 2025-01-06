import { useState } from "react";
import logo from "../../images/logo.webp";

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
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Contact</li>
          <li className="navbar-item">Cart</li>
          <li className="navbar-item" onClick={handleAuthentication}>
            {isLoggedIn ? "Logout" : "Login"}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
