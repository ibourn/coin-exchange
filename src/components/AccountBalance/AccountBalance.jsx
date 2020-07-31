import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    /*border: 1px solid red;*/
    margin: 20px auto 0 auto;
    padding-left: 1.5 rem 0 1.5rem 5rem;
    width: 98vw;
    max-width: 780px;
    font-size: 2rem;
    text-align: left;
`;

const Button = styled.button`
    margin: 10px auto 0 auto;
    float: right;
    border: none;
    background-color: #282c34;
    color: #61dafb;
    font-size: 1.4rem;
    :active {
        background: #0053ba;
    }
    :hover {
        border: 1px solid #cccccc;
        border-radius: 3px;
        cursor: pointer;
    }
`;

export default function AccountBalance(props) {

    const buttonBalanceText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    const buttonRefreshText = props.isAutoRefresh ? 'Auto refresh' : 'Lazy refresh';

    const toggleBalance = props.showBalance ?
        <span><strong>Balance : </strong>$ {props.amount}</span> : null;


    return (
        <Section className="balance">
            {toggleBalance}
            <Button onClick={props.handleAutoRefresh}>{buttonRefreshText}</Button>
            <Button onClick={props.handleToggleBalance}>{buttonBalanceText}</Button>
        </Section>
    );
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}