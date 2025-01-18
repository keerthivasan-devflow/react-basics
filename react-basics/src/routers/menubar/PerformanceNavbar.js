import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const PerformanceNavbar = () => {
  return (
    <>
    <h1>Performance related components links provided below</h1>
      <section className="submenu-block">
        <NavLink to={"pure-components"} className={"submenu-item"}>
          Pure Component
        </NavLink>
        <NavLink to={"hoc"} className={"submenu-item"}>
          Higher Order Component
        </NavLink>
        <NavLink to={"render-props"} className={"submenu-item"}>
          Render Props
        </NavLink>
      </section>
      <Outlet />
    </>
  );
};

export default PerformanceNavbar;
