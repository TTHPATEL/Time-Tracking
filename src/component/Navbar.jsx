import React from "react";
import style from "./navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { isAction } from "@reduxjs/toolkit";

function Navbar() {
  return (
    <>
      <div className={style.navbody}>
        <div className={style.lside}>
          <Link to="/" className={style.logoLink}>
            <h4>Time Tracker</h4>
          </Link>
        </div>
        <div className={style.rside}>
          {/* <NavLink
            to="/"
            id={style.homeLink}
            className={({ isActive }) =>
              `${style.navlink} ${isActive ? style["act-header"] : ""}`
            }
          >
            Home
          </NavLink> */}

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${style.navlink} ${isActive ? style["act-header"] : ""}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/create-user"
            className={({ isActive }) =>
              `${style.navlink} ${isActive ? style["act-header"] : ""}`
            }
          >
            Add user
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
