
import React, { useState, useEffect } from 'react';
import CoinList from '../components/CoinList/CoinList';
import AccountBalance from '../components/AccountBalance/AccountBalance';
import axios from 'axios';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';


const COIN_COUNT = 10;
const coinsUrl = 'https://api.coinpaprika.com/v1/coins';
const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';

const formatPrice = price => parseFloat(Number(price).toFixed(4));

function Home(props) {

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);


  useEffect(function () {
    if (coinData.length === 0) {
      // component did mount
      componentDidMount();

    } else {
      //component did update
    }
    /*Timer for AutoRefresh, TODO cleaner elseif*/
    let interval = null;
    if (isAutoRefresh) {
      interval = setInterval(() => {
          autoRefresh();
      }, 20000);
    } else if (!isAutoRefresh) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });


  const componentDidMount = async () => {
    const response = await axios.get(coinsUrl);
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    //debugger;
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);

    const coinPriceData = coinData.map(function (response) {
    const coin = response.data;
      //debugger;
    return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes["USD"].price),
        change: parseFloat(0)
    };
    });

    setCoinData(coinPriceData);
  }


  const handleRefresh = async (valueChangeId) => {
    const response = await axios.get(tickerUrl + valueChangeId);
    //debugger;
    const newPrice = formatPrice(response.data.quotes["USD"].price);

    const newCoinData = coinData.map(function (values) {
     let newValues = { ...values };
     //debugger;
      if (values.key === valueChangeId) {
        newValues.change = newPrice - newValues.price;
        newValues.price = newPrice;
      };
      return newValues;
    });

    setCoinData(newCoinData);
  }


  const getCoinData = (id) => {
    return axios.get(`${tickerUrl}${id}`);
  }

  const autoRefresh = async () => {
 
    const responses = coinData.map(async values => {
      let newValues = { ...values }; 

      const response = await getCoinData(values.key);
      let newPrice = formatPrice(response.data.quotes['USD'].price);
      newValues.change = newPrice - newValues.price;
      newValues.price = newPrice;
      return newValues;
    });
    const newCoinData = await Promise.all(responses);

    setCoinData(newCoinData);
  }


  const handleAutoRefresh = () => {
    setIsAutoRefresh(oldValue => !oldValue);
  }

  const handleToggleBalance = () => {
    setShowBalance(oldValue => !oldValue);
  }

  const handleBrrrr = () => {
    setBalance(oldBalance => oldBalance + 1200);
  }

  const handleTransaction = (isBuy, valueChangeId) => {
    var balanceChange = isBuy ? 1 : -1;

    const newCoinData = coinData.map(function (values) {
      let newValues = { ...values };
      if (valueChangeId === values.key) {
        newValues.balance += balanceChange;
        setBalance(oldBalance => oldBalance - balanceChange * newValues.price);

      }
      return newValues;
    })

    setCoinData(newCoinData);
  }


  return (
    <>
      <AccountBalance
        amount={balance}
        handleToggleBalance={handleToggleBalance}
        handleAutoRefresh={handleAutoRefresh}
        handleBrrrr={handleBrrrr}
        showBalance={showBalance}
        isAutoRefresh={isAutoRefresh} />
      <CoinList
        coinData={coinData}
        handleRefresh={handleRefresh}
        handleTransaction={handleTransaction}
        showBalance={showBalance}
        isAutoRefresh={isAutoRefresh} />
    </>
  );
}


export default Home;
