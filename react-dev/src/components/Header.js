import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const items = useSelector((store) => store.cart.items);

  return (
    <div className="flex items-center justify-between p-4 bg-lime-700 text-white h-32">
      <div>
        <h1 className="text-3xl font-extrabold">CurryCravings</h1>
      </div>
      <div className="flex flex-grow justify-end">
        <ul className="flex space-x-6 font-semibold">
          <li className="text-amber-500">
            {onlineStatus && (
              <AiOutlineCheckCircle className="text-2xl text-white" />
            )}
          </li>
          <li className="cursor-pointer">
            <Link to={"/"} className="hover:underline hover:underline-offset-4">
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/about"} className="hover:underline hover:underline-offset-4">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/contact"} className="hover:underline hover:underline-offset-4">Contact</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/grocery"} className="hover:underline hover:underline-offset-4">Grocery</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/cart"} className={"flex space-x-1"}>
              <AiOutlineShoppingCart className="text-2xl" />
              <span>({items.length})</span>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/login"} className="hover:underline hover:underline-offset-4" onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? "Logout" : "Login"}
            </Link>
          </li>

          <li className="cursor-pointer flex space-x-2 font-light">
            <FaRegCircleUser className="text-3xl" />
            <span>{loggedInUser}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
