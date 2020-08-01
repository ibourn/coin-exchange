import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


const DivCoin = styled.div`
  min-height: 77vh;

`;

const Hcoin = styled.h2`
    font-size: 2rem;
    margin-bottom: 20px;
`;

const LiCoin = styled.li`
     text-align: left;
    margin-bottom: 5px;
    list-style-type: circle;
    a {
        color: white;
    }
`;

const coinBaseUrl = 'https://api.coinpaprika.com/v1/coins/';
const coinEndPoint = '/twitter';


const CoinPage = ({ match }) => {
    const [tweets, setTweets] = useState([]);
    const url = coinBaseUrl + match.params.id + coinEndPoint;
    

    useEffect(function() {
          componentDidMount();
    });
       

    const componentDidMount = async () => {
        const response = await axios.get( url );

        const tweetsList = response.data.slice(0, 20).map( coin => {
           return({
               status : coin.status, 
               link : coin.status_link
            } );
        } );

        setTweets(tweetsList);
    }

    return (
        <DivCoin>
           <Hcoin className="title">20 last tweets about : {match.params.id}</Hcoin>
              <article>
                    <ul>
                        {
                        tweets.map((tweet, index) =>
                            <LiCoin key={ index }> 
                                <a href={ tweet.link }> { tweet.status }</a>
                            </LiCoin>    
                        )
                        }
                    </ul>
              </article>
        </DivCoin>
    );

}

export default (CoinPage);
