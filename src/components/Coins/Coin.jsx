import React, { Component } from 'react';
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


export default class Coin extends Component {

    handleClick = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();

        this.props.handleRefresh(this.props.ticker);
    }

    render() {
        /*
            const toggleBalance = this.props.showBalance ?
             <Td>{this.props.balance}</Td> : null;
        */

            return(
                <tr>
                  <Td>{this.props.name}</Td>
                  <Td>{this.props.ticker}</Td>
                  {this.props.showBalance ? <Td>{this.props.balance}</Td> : null}
                  <Td>${this.props.price}</Td>
                  <Td>
                      <form action="">
                          <Button onClick={this.handleClick}>Refresh</Button>
                      </form>
                  </Td>
                </tr>
              );

    }
}
//pour $ : hors{} c'est du html!!! donc déjà un string

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
 