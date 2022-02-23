import { useState } from "react";
import React from "react";
import { Button, Navbar } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import * as FaICons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { AiFillCodepenSquare, AiOutlineConsoleSql } from "react-icons/ai";
import { FoodTable } from "./FoodTable";

export function Navigation() {

  /*
  return (
    <>
      <div
        className="
        navbar"
      >
        <Link to="#" className="menu-bars">
          <FaICons.FaIcons.Fabar onClick={props.showSideBar} />
        </Link>
      </div>
      <nav className={props.sidebar ? "navbar-toggler active" : "navbar-toggler"}>
        <ul className="nav-menu items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
  */

  return (
  

            <div class="container-fluid">
              <div class="navbar-wrapper">
                <div class="navbar-brand">Nutritional Profile Module</div>
              </div>
            </div>

  )
}
