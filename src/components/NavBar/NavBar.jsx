import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

import styled from 'styled-components';



const NavBar = ({ history }) => {
  //const [isOpen, setOpen] = useState(false);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" role="navigation"
      aria-label="main navigation">
      <a className="navbar-brand" href="#">
        <img src="/lefuturlogo.svg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy">
          Home/brand</img>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item active">
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="navbar-link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="navbar-link"
              to="/profile"
            >
              Profile
            </NavLink>
          </li>

          <li className="nav-item">
            <div className="buttons">
              <a className="button">Log in</a>
            </div>
          </li>
        </ul>

      </div>
    </nav>
  );

}

export default withRouter(NavBar);