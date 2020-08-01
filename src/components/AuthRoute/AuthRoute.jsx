import React, { useContext } from "react";
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from "../UserContext/UserContext";


const AuthRoute = ({ component: Component, ...rest }) => {
  
  const { isAuth } = useContext(UserContext);

  const result = isAuth ? <Component  /> : <Redirect to="/signup" />;

  
  return (<Route {...rest} render={ () =>  result } />);
};

export default AuthRoute;
