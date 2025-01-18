import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HookNavbar = () => {
  return (
    <>
      <h1>Functional Hooks Component Implementation</h1>
      <section className="submenu-block">
        <NavLink to={"use-state"} className={"submenu-item"}>
          useState()
        </NavLink>
        <NavLink to={"use-effect"} className={"submenu-item"}>
          useEffect()
        </NavLink>
        <NavLink to={"use-memo"} className={"submenu-item"}>
          useMemo()
        </NavLink>
        <NavLink to={"use-context"} className={"submenu-item disabled-btn"}>
          useContext() - disabled
        </NavLink>
        <NavLink to={"use-callback"} className={"submenu-item"}>
          useCallback()
        </NavLink>
      </section>
      <Outlet />
    </>
  );
};

export default HookNavbar;
