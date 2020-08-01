import React, {useState, useEffect} from 'react';
import axios from 'axios';

import styled from 'styled-components';

const DivCoin = styled.div`
  min-height: 77vh;
  padding-top: 10%;

`;

const coinBaseUrl = 'https://api.coinpaprika.com/v1/coins/';
const coinEndPoint = '/twitter';

const CoinPage = ({ match }) => {
    const [tweets, setTweets] = useState([]);
    const url = coinBaseUrl + match.params.id + coinEndPoint;
    

    useEffect(function() {
        
          // component did mount
          componentDidMount();
    });
       

    const componentDidMount = async () => {
        console.log("JE MONTE LA PAGE");
    const response = await axios.get( url );
     const tweetsList = response.data.slice(0, 20).map( coin => {
         return({status : coin.status, link : coin.status_link} );
        } );
     console.log(tweetsList);
     setTweets(tweetsList);
    }

    return (
      <DivCoin>
      <h1 className="title">20 last tweets about : {match.params.id}</h1>
      <article>
        <ul>
           {
          tweets.map((tweet, index) =>
              <li key={index}> <a href={tweet.link}> {tweet.status}</a></li>
             
          )
        }
        </ul>
      </article>
    </DivCoin>
    );

}

export default (CoinPage);
