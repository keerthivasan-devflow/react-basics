import logo from "../../images/logo.webp";

const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
