import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between p-4 w-1/2 mx-auto capitalize">
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-400" : " ",
            e.isActive ? " font-semibold" : " ",
          ].join(" ");
        }}
        to="/"
      >
        Problems
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-rose-400" : " ",
            e.isActive ? " font-semibold" : " ",
          ].join(" ");
        }}
        to="/about"
      >
        POD
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-rose-400" : " ",
            e.isActive ? " font-semibold" : " ",
          ].join(" ");
        }}
        to="/contact"
      >
        contact
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-rose-400" : " ",
            e.isActive ? " font-semibold" : " ",
          ].join(" ");
        }}
        to="/places"
      >
        community
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-rose-400" : " ",
            e.isActive ? " font-semibold" : " ",
          ].join(" ");
        }}
        to="/Profile"
      >
        Profile
      </NavLink>
    </nav>
  );
};

export default Nav;
