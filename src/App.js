import React from 'react';
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
          name: "Bthereum",
          ticker: 'BTH',
          price: 274.9
        },
        {
          name: "Cthereum",
          ticker: 'CTH',
          price: 274.9
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeticker) {
    //const coin = this.state.coinData.find(({ticker}) => ticker === valueChangeticker);
    const newCoinData = this.state.coinData.map(function ({ ticker, name, price }) {
      let newPrice = price;
      if (ticker === valueChangeticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      };
    
    return {
      ticker,
      name,
      price: newPrice
    }
  });

    this.setState({ coinData: newCoinData });
  };


  render() {
    return (
      <DivApp>
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </DivApp>
    );
  }
}

export default App;
