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

    vertical-align: middle;
text-align: center;
`;

/*
const Section =  styled.section`
    /*border: 1px solid red;*//*
    
    font-size: 2rem;
    text-align: center;
    margin-bottom 2rem;
    line-height: 3rem;
    display: inline-block;
`;
*/

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

const ButtonHelicopter = styled.button`
margin-left: 8px;
`;

const ButtonToggleBalance = styled(ButtonHelicopter)`
width: 150px;
`;

const Balance = styled.div`
min-width: 250px;
margin: 0.5rem 0 0 2.5rem;
font-size: 1.5em;
vertical-align: middle;
text-align: center;
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default function AccountBalance(props) {

    const buttonBalanceText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    const buttonRefreshText = props.isAutoRefresh ? 'Lazy refresh' : 'Auto refresh';

   // const toggleBalance = props.showBalance ?
     //   <span><strong>Balance : </strong>$ {props.amount}</span> : null;
    let content = '\u00A0';
    if(props.showBalance) {
       content = <span><strong>Balance : </strong> { formatter. format(props.amount)}</span>;
    }


    const btnBalanceClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');
    return (
        <>
        <Balance>{content}</Balance>
        <Section className="balance">
        <button className='btn btn-info' onClick={props.handleAutoRefresh}>{buttonRefreshText}</button>
            <ButtonToggleBalance className={btnBalanceClass} onClick={props.handleToggleBalance}>{buttonBalanceText}</ButtonToggleBalance>
            <ButtonHelicopter className="btn btn-success"
            onClick={props.handleBrrrr}>
            <i className="fas fa-helicopter"></i>
            </ButtonHelicopter>
        </Section>
        </>
    );
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}