import React, {Component, useContext} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Redirect } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const AuthRoute = ({
  component: Component,
  ...rest
}) => {
  //const { isAuth } = useContext(UserContext);
  const isAuth = true;
  const result = isAuth ? 
  <Component  /> : <Redirect to="/" />;

  
  return (<Route {...rest}
    render={() =>  result
    } />);
};

export default AuthRoute;
