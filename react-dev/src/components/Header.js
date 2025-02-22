import logo from "../../images/logo.png";
import { NavLink } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      <div>
        <img src={logo} alt="logo" className="w-full h-24 object-cover" />
      </div>
      <div className="flex flex-grow justify-end">
        <ul className="flex space-x-6">
          <li className="text-amber-500">
            {onlineStatus && (
              <span className="bg-green-500 w-4 h-4 inline-block mx-1 rounded-full"></span>
            )}
          </li>
          <li className="text-blue-400 hover:text-blue-600 cursor-pointer">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="text-blue-400 hover:text-blue-600 cursor-pointer">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="text-blue-400 hover:text-blue-600 cursor-pointer">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li className="text-blue-400 hover:text-blue-600 cursor-pointer">
            <NavLink to={"/grocery"}>Grocery</NavLink>
          </li>
          <li className="text-blue-400 hover:text-blue-600 cursor-pointer">
            <NavLink to={"/cart"}>Cart Items</NavLink>
          </li>
          <li className="text-blue-400 hover:text-blue-600 cursor-pointer">
            <NavLink to={"/login"}>Login</NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
