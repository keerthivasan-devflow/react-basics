import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/menubar.css"

const MenuBar = () => {
  return (
    <>

      <NavLink to={"/home"} className={"nav-link"}>Home</NavLink>
      <NavLink to={"/hooks"} className={"nav-link"}>React Hooks</NavLink>
      <NavLink to={"/performance"} className={"nav-link"}>Performance</NavLink>
      <NavLink to={"/context-api"} className={"nav-link"}>Context API</NavLink>
      <NavLink to={"/redux"} className={"nav-link"}>React Redux</NavLink>
      <NavLink to={"/react-hook-form"} className={"nav-link"}>React Hook Form</NavLink>
      <NavLink to={"/users"} className={"nav-link"}>Show Users Dashboard</NavLink>
    </>
  );
};

export default MenuBar