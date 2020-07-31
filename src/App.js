import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserContext } from "./components/UserContext/UserContext";
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import NavBar from './components/NavBar/NavBar';
import AuthRoute from './components/AuthRoute/AuthRoute';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import styled from 'styled-components';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';


const DivApp = styled.div`
    text-align: center;
    background-color: rgb(20, 56, 97);
    color: #cccccc;
    `;



function App(props) {
  const [isAuth, setIsAuth] = useState(false);


  return (
    <DivApp>
      <BrowserRouter>
      <ExchangeHeader />
      <UserContext.Provider value={{ isAuth, setIsAuth }} >
      <NavBar />
      
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
        <Route exact strict path="/" component={ Home } />
  
          <Route exact strict path="/about" component={ About } />
    
          <AuthRoute exact path="/profile" component={ Profile } />

          <Route exact strict path="/signup" component={ SignUp } />
          <Route  path="*" component={ NotFound }/>     
        </Switch>
      </div>
      </UserContext.Provider>
      
    </BrowserRouter>
    
    </DivApp>
  );
  }


export default App;
