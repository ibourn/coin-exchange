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
  state = {
    balance: 10000,
    coinData: [
      {
        name: "Bitcoin",
        ticker: 'BTC',
        balance: 0.5,
        price: 9999.9
      },
      {
        name: "Ethereum",
        ticker: 'ETH',
        balance: 32,
        price: 274.9
      },
      {
        name: "Tether",
        ticker: 'USDT',
        balance: 0,
        price: 1
      },
      {
        name: "Ripple",
        ticker: 'XRP',
        balance: 1000,
        price: 0.2
      },
      {
        name: "Bitcoin Cash",
        ticker: 'BCH',
        balance: 0,
        price: 298.99
      },
      {
        name: "Bthereum",
        ticker: 'BTH',
        balance: 0.5,
        price: 274.9
      },
      {
        name: "Cthereum",
        ticker: 'CTH',
        balance: 0.5,
        price: 274.9
      }
    ],
    showBalance: true
  }
 /*
  handleRefresh = (valueChangeticker) => {
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
  }
*/

handleRefresh = (valueChangeticker) => {
  //const coin = this.state.coinData.find(({ticker}) => ticker === valueChangeticker);
  const newCoinData = this.state.coinData.map( function( values ) {
    let newValues = {...values};
    if (values.ticker === valueChangeticker) {
      const randomPercentage = 0.995 + Math.random() * 0.01;
      newValues.price = newValues.price * randomPercentage;
    };
  
  return newValues;
  });

  this.setState({ coinData: newCoinData });
}

/*
  handleToggleBalance = () => {
    this.setState({ showBalance: !this.state.showBalance });
  }
  */
  handleToggleBalance = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance 
      };
    });
  }

  render() {
    return (
      <DivApp>
        <ExchangeHeader />
        <AccountBalance 
          amount={this.state.balance}
          handleToggleBalance={this.handleToggleBalance} 
          showBalance={this.state.showBalance} />
        <CoinList 
          coinData={this.state.coinData}
          handleRefresh={this.handleRefresh}
          showBalance={this.state.showBalance} />
      </DivApp>
    );
  }
}

export default App;
