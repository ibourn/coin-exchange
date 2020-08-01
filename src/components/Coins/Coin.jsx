import React, {useState, useContext} from 'react';
//import './Coin.css';
import { UserContext } from "../UserContext/UserContext";

import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { Route, Link } from 'react-router-dom'


const CoinPage = ({ match }) => <p>{match.params.id}</p>;

 
const Td = styled.td`
    border: 1px solid #cccccc;
    width: 14vw;
`;//25 22

const TdControls = styled(Td)`
width: 20vw;
`;

const TdName = styled(Td)`
width: 24vw;
`;

const LinkStyle = {
    color: "#61dafb"
};

const blinkingGreen = keyframes` 
0%{     background-color: #282c34;    }
50%{    background-color: green; }
100%{     background-color: #282c34;    }
`;
const blinkingRed = keyframes` 
    0%{     background-color: #282c34;    }
    50%{    background-color: red; }
    100%{     background-color: #282c34;    }
    
`;


 const TdGreen = styled.td`
 border: 1px solid #cccccc;
    width: 16vw;
 color: #abfcb6;
animation: ${blinkingGreen} ease-in-out 2s 5;
`;
const TdRed = styled.td`
border: 1px solid #cccccc;
    width: 16vw;
color: #fc99ad;
animation: ${blinkingRed} ease-in-out 2s 5;
`;

const ButtonX = styled.button`
 font-size: 11px;
 width: 64px;
 margin: 3px 5px 0;
`;

const ButtonRefresh = styled.button`
font-size: 11px;
width: 64px;
margin: 3px 5px 0;
`;
//pour refresh
// className= 'btn btn-info'

//based class component => functionnal component
export default function Coin(props) {
    //const car propriétés de classe deviennent membr
    const { isAuth, setIsAuth } = useContext(UserContext);


    const handleRefresh = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();

        props.handleRefresh(props.id);
    }

    const handleBuy = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();

        props.handleTransaction(true, props.id);
    }

    const handleSell = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();

        props.handleTransaction(false, props.id);
    }

    console.log(props.change);
    //plus de render ds fonction mais toujours return statement qui passe en top level
    return (
        <>
        <tr>
        <TdName>
            <Link style={LinkStyle} to={`Coin/${props.id}`}>
           {props.name}
            </Link>
            </TdName>
            <Td>{props.ticker}</Td>
            <Td>{props.showBalance ? props.balance : '-'} </Td>
            {props.change == 0 ? <Td>{props.price}</Td> : props.change > 0 ?
            <TdGreen>${props.price}</TdGreen> : <TdRed>${props.price}</TdRed>}
        
            {!props.isAutoRefresh ?  <Td>
                <form action="">
                    <ButtonRefresh className="btn btn-info" onClick={handleRefresh}>Lazy</ButtonRefresh>
                </form>
            </Td> : null}
            {isAuth ? <TdControls>
                <form action="">
                    <ButtonX className="btn btn-success" onClick={handleBuy}>Buy</ButtonX>
                    <ButtonX className="btn btn-danger" onClick={handleSell}>Sell</ButtonX>
                </form>

            </TdControls> : null}
        </tr>
                    <Route path="/Coin/:id" component={CoinPage} />
</>
    ); 


    }
//pour $ : hors{} c'est du html!!! donc déjà un string

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
 