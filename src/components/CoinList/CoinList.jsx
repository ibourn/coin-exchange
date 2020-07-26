import React, { Component } from 'react';
import Coin from '../Coins/Coin';
import styled from 'styled-components';


const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
    `;

export default class CoinList extends Component {
    render() {
      /*
        const toggleBalance = this.props.showBalance ?
        <th>Balance</th> : null;
      */

        return (
            <Table> 
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                {this.props.showBalance ? <th>Balance</th> : null}
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.coinData.map( ({name, ticker, balance, price}) =>
                  <Coin key={ticker} name={name} 
                  handleRefresh={this.props.handleRefresh}
                  ticker={ticker}
                  showBalance={this.props.showBalance}
                  balance={balance}
                  price={price} 
                  />
                )
              }
            </tbody>
          </Table>
        )
    }
}
