import React from "react";
import { NavLink } from "react-router";

const Routing = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <ul className="flex justify-start items-center gap-4">
        <li className="border border-gray-500 hover:bg-gray-500 hover:font-bold hover:text-white hover:border-0 text-gray-500 rounded-3xl py-2 px-6">
          <NavLink to={"/react-memo"}>React.memo()</NavLink>
        </li>
        <li className="border border-gray-500 hover:bg-gray-500 hover:font-bold hover:text-white hover:border-0 text-gray-500 rounded-3xl py-2 px-6">
          <NavLink to={"/use-state"}>useState()</NavLink>
        </li>
        <li className="border border-gray-500 hover:bg-gray-500 hover:font-bold hover:text-white hover:border-0 text-gray-500 rounded-3xl py-2 px-6">
          <NavLink to={"/use-effect"}>useEffect()</NavLink>
        </li>
        <li className="border border-gray-500 hover:bg-gray-500 hover:font-bold hover:text-white hover:border-0 text-gray-500 rounded-3xl py-2 px-6">
          <NavLink to="/use-context">useContext()</NavLink>
        </li>
        <li className="border border-gray-500 hover:bg-gray-500 hover:font-bold hover:text-white hover:border-0 text-gray-500 rounded-3xl py-2 px-6">
          <NavLink to="/use-reducer">useReducer()</NavLink>
        </li>
        <li className="border border-gray-500 hover:bg-gray-500 hover:font-bold hover:text-white hover:border-0 text-gray-500 rounded-3xl py-2 px-6">
          <NavLink to="/use-ref">useRef()</NavLink>
        </li>
        <li className="border border-gray-500 hover:bg-gray-500 hover:font-bold hover:text-white hover:border-0 text-gray-500 rounded-3xl py-2 px-6">
          <NavLink to="/use-memo">useMemo()</NavLink>
        </li>
        <li className="border border-gray-500 hover:bg-gray-500 hover:font-bold hover:text-white hover:border-0 text-gray-500 rounded-3xl py-2 px-6">
          <NavLink to="/use-callback">useCallback()</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Routing;
