import React from 'react';
import './App.css';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import styled from 'styled-components';


const DivApp = styled.div`
    text-align: center;
    background-color: rgb(20, 56, 97);
    color: #cccccc;
    `;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: "Bitcoin",
          ticker: 'BTC',
          price: 9999.9
        },
        {
          name: "Ethereum",
          ticker: 'ETH',
          price: 274.9
        },
        {
          name: "Tether",
          ticker: 'USDT',
          price: 1
        },
        {
          name: "Ripple",
          ticker: 'XRP',
          price: 0.2
        },
        {
          name: "Bitcoin Cash",
          ticker: 'BCH',
          price: 298.99
        },
        {
          name: "Ethereum",
          ticker: 'ETH',
          price: 274.9
        },
        {
          name: "Ethereum",
          ticker: 'ETH',
          price: 274.9
        }
      ]
    }
  }

  render() {
    return (
      <DivApp>
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </DivApp>
    );
  }
}

export default App;
