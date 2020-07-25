import React, { Component } from 'react';
//import './Coin.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';
 
const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
   

    handleClick(event) {
        // Prevent the default action of submitting the form
        event.preventDefault();

        this.props.handleRefresh(this.props.ticker);
    }

    render() {
            return(
                <tr>
                  <Td>{this.props.name}</Td>
                  <Td>{this.props.ticker}</Td>
                  <Td>${this.props.price}</Td>
                  <Td>
                      <form action="">
                          <button onClick={this.handleClick}>Refresh</button>
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
 