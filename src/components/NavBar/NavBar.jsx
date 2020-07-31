import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

import styled from 'styled-components';


//style navalink et : 
const activeLink = {
  color: "black",
  backgroundColor: "DodgerBlue",
  fontFamily: "Arial"
};

const NavBar = ({ history }) => {
  //state to fix the problem with bootstrap js about changing the class
  const [isOpen, setOpen] = useState(true);

  const classTarget = isOpen ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTrigger = isOpen ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';


  const isAuth = !!localStorage.getItem("token");

  const loginUser = () => {
    localStorage.setItem("token", "some-login-token");
    history.push("/profile/Vijit");
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    history.push("/");
  };



  return (
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" role="navigation"
      aria-label="main navigation">
        <div className="container">
      <a className="navbar-brand" href="/about">
          Home/brand
      </a>
      <button className= {`${classTrigger}`} onClick={() => setOpen(!isOpen)} type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${classTarget}`} id="navbarContent">

      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
            <NavLink to="/" exact className="navbar-link" activeStyle={activeLink} >
              Home
            </NavLink>
      </li>
      <li class="nav-item">
            <NavLink
             to="/about" exact
              className="navbar-link" activeStyle={activeLink}
            >
              About
            </NavLink>
            </li>
      <li class="nav-item">
            <NavLink to="/profile" exact
              className="navbar-link" activeStyle={activeLink}
            >
              Profile
            </NavLink>
            </li>
            </ul>
           {/* <div className="navbar"> */}
            <div className="navbar-item">
              <div className="buttons">
                {!isAuth ? (
                  <button className="button is-white" onClick={loginUser}>
                    Log in
                  </button>
                ) : (
                  <button className="button is-black" onClick={logoutUser}>
                    Log out
                  </button>
                )}
              </div>
            {/* </div> */}
          </div>
         

      </div>
      </div>
    </nav>
  );

}

export default withRouter(NavBar);
