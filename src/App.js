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
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';


const DivApp = styled.div`
    text-align: center;
    background-color: rgb(20, 56, 97);
    color: #cccccc;
    `;

function App(props) {

  return (
    <>
    <div>
    <h1 className="">This is the HOME Page</h1>
    <p>
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
     
    </p>
  </div>

    <DivApp>
      <ExchangeHeader />
      <BrowserRouter>
      <NavBar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </DivApp>
    </>
  );
  }


export default App;
