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
import CoinPage from './pages/CoinPage';
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

  /*
  regex for routing :

  to Home : (/|/coin-exchange)(/|) matches / and /coin-exchange/ and coin-exchange
  to CoinPage : (|/coin-exchange)/coin/:id matches /coin/id and /coin-exchange/coin/id
  */

  return (
    <DivApp>
      <BrowserRouter>
        <ExchangeHeader />
        <UserContext.Provider value={{ isAuth, setIsAuth }} >
          <NavBar />

          <div className="container mt-2" style={{ marginTop: 40 }}>
            <Switch>
              {/* <Route exact strict path="/" component={Home} /> */}
              {/* <Route exact strict path="/coin-exchange*" component={Home} /> */}
              <Route exact strict path="(/|/coin-exchange)(/|)" component={Home} />

              <Route exact path="/about" component={About} />
  
              <AuthRoute exact path="/profile" component={Profile} />

              <Route exact path="/signup" component={SignUp} />

              {/* <Route exact path="/coin/:id" component={CoinPage} /> */}
              <Route exact  path="(|/coin-exchange)/coin/:id" component={CoinPage} />

              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </DivApp>
  );
}


export default App;
