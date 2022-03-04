import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Button } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import Home from "./pages/Home";
import { Mock_table } from "./pages/Mock_table";
import { FoodTable } from "./FoodTable";
import { AddFood } from "./AddFood";
import Statistics from "./pages/Statistics";
import Admin from "../layouts/Admin";

//import logo from "logo.svg";
import logoTT from "./logoTT.png";

var ps;

export function Sidebar(props) {
  // verifies if routeName is the one active (in browser input)

  /*React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }

    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });*/

  const sidebar = useRef();

  //intentando cerrar el sidebar

  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <div className="simple-text logo-normal">
          TTHubs
         {/* <img src={logoTT} alt="react-logo" />*/}
        </div>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          <li>
            <NavLink
              to="/statistics"
              className="nav-link"
              activeClassName="active"
            >
              Statistics
              <i className="nc-icon nc-sound-wave" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/foodtable"
              className="nav-link"
              activeClassName="active"
              aria-current="page"
            >
              Food Table
              <i className="nc-icon nc-tile-56" />
            </NavLink>
          </li>
          );
        </Nav>
      </div>
    </div>
  );
}
