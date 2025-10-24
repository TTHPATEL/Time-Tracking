import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { isAction } from "@reduxjs/toolkit";

function Navbar() {
  return (
    <>
      <div className={style.navbody}>
        <div className={style.lside}>
          <h4>Time Tracker</h4>
        </div>
        <div className={style.rside}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${style.navlink} ${isActive ? style["act-header"] : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/create-user"
            className={({ isActive }) =>
              `${style.navlink} ${isActive ? style["act-header"] : ""}`
            }
          >
            Add user
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${style.navlink} ${isActive ? style["act-header"] : ""}`
            }
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
