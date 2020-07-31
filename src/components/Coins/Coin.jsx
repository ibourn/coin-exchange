import React, {useState, useContext} from 'react';
//import './Coin.css';
import { UserContext } from "../UserContext/UserContext";

import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
 
const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

const Button = styled.button`
    height: 2rem;
    width: 100%;
    background-color: #282c34;
    color: #61dafb;
    border: none;
    font-size: 1rem;
    :active {
        background: #0053ba;
    }
    :hover {
        border: 1px solid #cccccc;
        border-radius: 3px;
        cursor: pointer;
    }
`;


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
    width: 25vh;
 color: #abfcb6;
animation: ${blinkingGreen} ease-in-out 2s 5;
`;
const TdRed = styled.td`
border: 1px solid #cccccc;
    width: 25vh;
color: #fc99ad;
animation: ${blinkingRed} ease-in-out 2s 5;
`;

//based class component => functionnal component
export default function Coin(props) {
    //const car propriétés de classe deviennent membr
    const { isAuth, setIsAuth } = useContext(UserContext);


    const handleClick = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();

        props.handleRefresh(props.id);
    }


    console.log(props.change);
    //plus de render ds fonction mais toujours return statement qui passe en top level
    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            {props.showBalance ? <Td>{props.balance}</Td> : null}
            {props.change == 0 ? <Td>{props.price}</Td> : props.change > 0 ?
            <TdGreen>${props.price}</TdGreen> : <TdRed>${props.price}</TdRed>}
        
            {!props.isAutoRefresh ?  <Td>
                <form action="">
                    <Button onClick={handleClick}>Lazy</Button>
                </form>
            </Td> : null}
            {isAuth ? <Td>action</Td> : null}
        </tr>
    ); 


    }
//pour $ : hors{} c'est du html!!! donc déjà un string

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
 