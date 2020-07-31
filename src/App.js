import React, {useState, useEffect} from 'react';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import NavBar from './components/NavBar/NavBar';
import styled from 'styled-components';
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import AuthRoute from './components/AuthRoute/AuthRoute';
import { UserContext } from "./components/UserContext/UserContext";
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
    
          <AuthRoute  component={ Profile } />

          <Route  path="*" component={ () => "404 : not found"}/>     
        </Switch>
      </div>
      </UserContext.Provider>
      
    </BrowserRouter>
    
    </DivApp>
  );
  }


export default App;
