import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coins/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

/*
//usage snippet flop
let sum = 0;
for(let num of [0,1,2,3,4,5]) {
  sum += num;
}

//usage prom => promise
return new Promise((resolve, reject) => {
  
}).then((result) => {
  
}).catch((err) => {
  
});


//exemple usage bracket colorizer
[1,2,3,4,5,6]
  .map( (item, index) => {return { item: item, key: index}; })
  .reduce( (accumulator, nextValue) => {
    return accumulator + <li>${nextValue}</li>;
  }, '');

*/

  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        <h1 className="App-title">
          Coin Exchange
        </h1>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      {/*ajout component balance*/}
      <AccountBalance amount={10000} />
      <table className="coin-table"> 
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>

        <Coin name="Bitcoin" ticker='BTC' price={9999.9} />
        <Coin name="Ethereum" ticker='ETH' price={274.9}/>
        <Coin name="Tether" ticker='USDT' price={1}/>
        <Coin name="Ripple" ticker='XRP' price={0.2}/>
        <Coin name="Ethereum" ticker='ETH' price={274.9}/>
        <Coin name="Ethereum" ticker='ETH' price={274.9}/>
        <Coin name="Ethereum" ticker='ETH' price={274.9}/>
      </tbody>
    </table>
    </div>
  );
}

export default App;
