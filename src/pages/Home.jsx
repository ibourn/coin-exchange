
import React, {useState, useEffect, useContext} from 'react';
import CoinList from '../components/CoinList/CoinList';
import AccountBalance from '../components/AccountBalance/AccountBalance';
import { UserContext } from "../components/UserContext/UserContext";


import styled from 'styled-components';
import axios from 'axios';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';



const COIN_COUNT = 10;
const coinsUrl = 'https://api.coinpaprika.com/v1/coins';
const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';

const formatPrice = price => parseFloat(Number( price ).toFixed(4));

function Home(props) {
  const { isAuth, setIsAuth } = useContext(UserContext);


  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);
 
  /* possible mais piégeux : ne pas oublier on manipule un objet entier
  const [state, setState] = useSetSate({
    balance: 10000,
    showBalance: true,
    coinData: []  
  })
  */
useEffect(function() {
  if( coinData.length === 0 ) {
    // component did mount
    componentDidMount();
    
  } else {
    //component did update
    
  }
  let interval = null;
  if (isAutoRefresh) {
    interval = setInterval(() => {
      autoRefresh();
      console.log("je refresh");
    }, 20000);
  } else if (!isAutoRefresh ) {
    console.log("je stop le refresh");
    clearInterval(interval);
  }
  return () => clearInterval(interval);
});


  const componentDidMount = async () => {
    const response = await axios.get( coinsUrl );
    const coinIds = response.data.slice(0, COIN_COUNT).map( coin => coin.id );
    //debugger;
    const promises = coinIds.map( id => axios.get( tickerUrl + id ));
    const coinData = await Promise.all( promises );

    const coinPriceData = coinData.map( function(response) {
      const coin = response.data;
      //debugger;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice( coin.quotes["USD"].price )
      };
    });

    //this.setState({ coinData: coinPriceData });
    setCoinData(coinPriceData);
  }


const handleRefresh = async (valueChangeId) => {

  const response =  await axios.get( tickerUrl + valueChangeId);
  //debugger;
  const newPrice = formatPrice( response.data.quotes["USD"].price );
  const newCoinData = coinData.map( function( values ) {
    let newValues = {...values};
    //debugger;
    if (values.key === valueChangeId) {
      newValues.price = newPrice;
    };
  
  return newValues;
  });
  //this.setState({ coinData: newCoinData });
  setCoinData(newCoinData);
}


const API_BASE_URL = 'https://api.coinpaprika.com/v1';

  const getCoinPrice = (id) => {
    return axios.get(`${tickerUrl}${id}`);
  }

  const autoRefresh = async () => {
    // generate the new state by cloning the old state
    // and updating the target coin price
    const responses = coinData.map(async values => {
      let newValues = { ...values }; // shallow copy
        const response = await getCoinPrice(values.key);
        newValues.price = formatPrice( response.data.quotes['USD'].price );
      return newValues;
    });
    const newCoinData = await Promise.all(responses);

    setCoinData(newCoinData);
  }


  const handleAutoRefresh = () => {
    /* this.setState( function(oldState) {
       return {
         ...oldState,
         showBalance: !oldState.showBalance 
       };
     });*/
     setIsAutoRefresh(oldValue => !oldValue);
   }

  const handleToggleBalance = () => {
   /* this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance 
      };
    });*/
    setShowBalance(oldValue => !oldValue);
  }

  
    return (
      <>
      <p>`${isAuth + "ae"}`</p>
         <AccountBalance 
          amount={balance}
          handleToggleBalance={handleToggleBalance} 
          handleAutoRefresh={handleAutoRefresh}
          showBalance={showBalance}
          isAutoRefresh={isAutoRefresh} />
        <CoinList 
          coinData={coinData}
          handleRefresh={handleRefresh}
          showBalance={showBalance} />
      </>
    );
  }


export default Home;
