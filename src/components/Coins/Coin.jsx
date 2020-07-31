import React from 'react';
//import './Coin.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';
 
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

//based class component => functionnal component
export default function Coin(props) {
    //const car propriétés de classe deviennent membre de function

    const handleClick = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();

        props.handleRefresh(props.id);
    }

    const priceStyle = props.change >= 0 ? {color: "green"} : {color: "red"};
    //plus de render ds fonction mais toujours return statement qui passe en top level
    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            {props.showBalance ? <Td>{props.balance}</Td> : null}
            <Td style={priceStyle}>${props.price}</Td>
            <Td>
                <form action="">
                    <Button onClick={handleClick}>Refresh</Button>
                </form>
            </Td>
        </tr>
    );

    }
//pour $ : hors{} c'est du html!!! donc déjà un string

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
 