import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "font-extrabold text-cyan-500" : "font-medium"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
