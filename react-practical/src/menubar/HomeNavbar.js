import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <>
      <h1>Basic components links provided below</h1>
      <section className="submenu-block">
        <NavLink to={"error-boundary"} className={"submenu-item"}>
          Error Boundary
        </NavLink>
        <NavLink to={"parent-component"} className={"submenu-item"}>
          Class Parent Component
        </NavLink>
      </section>
      <Outlet />
    </>
  );
};

export default HomeNavbar;
