import React, { useContext } from 'react';
import Coin from '../Coins/Coin';
import { UserContext } from "../UserContext/UserContext";
import styled from 'styled-components';


/*const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
    `;*/

    const Table = styled.table`
    font-size: 1rem;
    `;

export default function CoinList(props) {
  const { isAuth, setIsAuth } = useContext(UserContext);

  return (
    <Table className="table table-primary table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          {/* {props.showBalance ? <th>Balance</th> : null} */}
          <th>Balance</th>
          <th>Price</th>
          {!props.isAutoRefresh ? <th>Refresh</th> : null}
          {isAuth ? <th>Action</th> : null}
        </tr>
      </thead>
      <tbody>
        {
          props.coinData.map(({ key, name, ticker, balance, price, change }) =>
            <Coin
              key={key}
              id={key}
              name={name}
              handleRefresh={props.handleRefresh}
              handleTransaction={props.handleTransaction}
              ticker={ticker}
              showBalance={props.showBalance}
              balance={balance}
              price={price}
              change={change}
          isAutoRefresh={props.isAutoRefresh}
            />
          )
        }
      </tbody>
    </Table>
  )

}
