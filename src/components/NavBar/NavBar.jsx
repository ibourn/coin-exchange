import React, { useState, useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import styled from 'styled-components';

const Nav = styled.nav`
padding: 0;
    `;


const DivContainer = styled.div`
    background-color: #282c34;
    min-height: 35px;/* 100vh;*/
    min-width: 100%;    
  `;

  const ButtonLogIn = styled.button`
    background-color: #61dafb;
    color: #00000;
    height: 25px;
    width: 60px;
    padding: 0;
    :hover {
      font-weight: bold;
    }
  `;

  const ButtonLogOut = styled.button`
  background-color: #282c34;
  color: #61dafb;
  border: 1px solid #61dafb;
  height: 25px;
  width: 60px;
  padding: 0;
  :hover {
    color: #c2f0fc;
  }
`;

const SpanToggler = styled.span`
  texDecorationColor: #61dafb;
`;
 
const linkStyle = {
  color: "#61dafb"

}
const activeLink = {
  color: "white",
  fontWeight: "bold",
  textDecoration: "underline #61dafb"
};

const NavBar = ({ history }) => {
  //state to fix the problem with bootstrap js about changing the class
  const [isOpen, setOpen] = useState(true);

  const classTarget = isOpen ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTrigger = isOpen ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

  const { isAuth, setIsAuth } = useContext(UserContext);

  //const isAuth = !!localStorage.getItem("token");

  const loginUser = () => {
    setIsAuth(true);
    //localStorage.setItem("token", "some-login-token");
  };

  const logoutUser = () => {
    setIsAuth(false);    //localStorage.removeItem("token");
  };



  return (
   
    <Nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" role="navigation"
      aria-label="main navigation">
        <DivContainer className="container">
      <span></span>
      <button className= {`${classTrigger}`} onClick={() => setOpen(!isOpen)} type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <SpanToggler className="navbar-toggler-icon"></SpanToggler>
      </button>

      <div className={`${classTarget}`} id="navbarContent">

      <ul className="navbar-nav mr-auto">
      <li className="nav-item mr-3">
            <NavLink to="/" exact className="navbar-link" style={linkStyle} activeStyle={activeLink} >
              Home
            </NavLink>
      </li>
      <li className="nav-item mr-3">
            <NavLink
             to="/about" exact
              className="navbar-link" style={linkStyle} activeStyle={activeLink}
            >
              About
            </NavLink>
            </li>
      <li className="nav-item mr-3">
            <NavLink to="/profile" exact
              className="navbar-link" style={linkStyle} activeStyle={activeLink}
            >
              Profile
            </NavLink>
            </li>
            <li className="nav-item mr-3">
            <NavLink to="/signup" exact
              className="navbar-link" style={linkStyle} activeStyle={activeLink}
            >
              Sign Up
            </NavLink>
            </li>
            </ul>
           {/* <div className="navbar"> */}
            <div className="navbar-item">
              <div className="buttons">
                {!isAuth ? (
                  <ButtonLogIn className="btn" onClick={loginUser}>
                    Log in
                  </ButtonLogIn>
                ) : (
                  <ButtonLogOut className="btn" onClick={logoutUser}>
                    Log out
                  </ButtonLogOut>
                )}
              </div>
            {/* </div> */}
          </div>
         

      </div>
      </DivContainer>
    </Nav>
  );

}

export default withRouter(NavBar);
