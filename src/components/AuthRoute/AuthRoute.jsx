import React, { useContext } from "react";
import { Redirect, Route } from 'react-router-dom';

import { UserContext } from "../UserContext/UserContext";

const AuthRoute = ({
  component: Component, history,
  ...rest
}) => {
  const { isAuth } = useContext(UserContext);
  //const isAuth = true;
  const result = isAuth ? 
  <Component  /> : <Redirect to="/signup" />;
  //history.push("/profile/JohnDoe");
  
  return (<Route {...rest}
    render={() =>  result
    } />);
};

export default AuthRoute;
