import React, { Component } from 'react';
//import './AccountBalance.css'; //css remplacé par le styled-component
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

export default class AccountBalance extends Component {
    render() {
        return (
            <Section className="balance">
                <strong>Balance : </strong>$ {this.props.amount}
            </Section>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}