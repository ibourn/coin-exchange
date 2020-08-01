import React, { useContext} from 'react';
import { Route, Link } from 'react-router-dom'
import { UserContext } from "../UserContext/UserContext";
import CoinPage from '../../pages/CoinPage';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

/*styling the table*/
const Td = styled.td`
    border: 1px solid #cccccc;
    width: 14vw;
`;

const TdControls = styled(Td)`
width: 20vw;
`;

const TdName = styled(Td)`
width: 24vw;
`;

const LinkStyle = {
    color: "#61dafb"
};

/*styling the prices*/
const blinkingGreen = keyframes` 
    0%{  background-color: #282c34; }
    50%{ background-color: green; }
    100%{background-color: #282c34; }
`;
const blinkingRed = keyframes` 
    0%{  background-color: #282c34; }
    50%{ background-color: red; }
    100%{background-color: #282c34; } 
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

/*styling the buttons*/
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

export default function Coin(props) {

    const { isAuth } = useContext(UserContext);


    const handleRefresh = (event) => {
        event.preventDefault();

        props.handleRefresh(props.id);
    }

    const handleBuy = (event) => {
        event.preventDefault();

        props.handleTransaction(true, props.id);
    }

    const handleSell = (event) => {
        event.preventDefault();

        props.handleTransaction(false, props.id);
    }

    
    return (
        <>
            <tr>
                <TdName>
                    <Link style={LinkStyle} to={`Coin/${props.id}`}>
                    {props.name}
                   </Link>
                </TdName>
                <Td>{ props.ticker }</Td>
                <Td>{ props.showBalance ? props.balance : '-' } </Td>
                { props.change === 0 ? <Td>{props.price}</Td> : 
                    ( props.change > 0 ? <TdGreen>${props.price}</TdGreen> :
                        <TdRed>${props.price}</TdRed> )}
            
                { !props.isAutoRefresh ?  
                    <Td><form action="">
                        <ButtonRefresh className="btn btn-info" onClick={handleRefresh}>Lazy</ButtonRefresh>
                    </form></Td>
                    : null }
                    
                {isAuth ? 
                    <TdControls>
                        <form action="">
                            <ButtonX className="btn btn-success" onClick={handleBuy}>Buy</ButtonX>
                            <ButtonX className="btn btn-danger" onClick={handleSell}>Sell</ButtonX>
                    </form>
                    </TdControls> : null }
            </tr>
            <Route path="/Coin/:id" component={CoinPage} />
        </>
    ); 
    }

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
 