import React, { useContext } from 'react';
import { UserContext } from "../UserContext/UserContext";
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Section = styled.section`
    margin: 20px auto 0 auto;
    max-width: 780px;
    font-size: 2rem;

    vertical-align: middle;
    text-align: center;
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
    const { isAuth } = useContext(UserContext);


    const buttonBalanceText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    const buttonRefreshText = props.isAutoRefresh ? 'Lazy refresh' : 'Auto refresh';

    let content = '\u00A0';
    if (props.showBalance) {
        content = <span><strong>Balance : </strong> { formatter.format( props.amount ) }</span>;
    }

    const btnBalanceClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');

    return (
        <>
            <Balance> {content} </Balance>
            <Section>
                <button className='btn btn-info' 
                    onClick={props.handleAutoRefresh}>
                         {buttonRefreshText}
                </button>
                { isAuth ? 
                <>
                <ButtonToggleBalance className={btnBalanceClass}
                     onClick={props.handleToggleBalance}>
                         {buttonBalanceText}
                </ButtonToggleBalance>
                <ButtonHelicopter className="btn btn-success"
                    onClick={props.handleBrrrr}>
                      <i className="fas fa-helicopter"></i>
                </ButtonHelicopter>
                </>
                : null
                }
            </Section>
        </>
    );
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}