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

export default class AccountBalance extends Component {
    constructor(props) {
        super(props);
        //this.handleClick = this.handleClick.bind(this);
    }
   
    /* pas nécéssaire
    handleClick(event) {
        // Prevent the default action of submitting the form
        event.preventDefault();

        this.props.handleToggleBalance();
    }
    */

    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';

        const toggleBalance = this.props.showBalance ?
         <span><strong>Balance : </strong>$ {this.props.amount}</span> : null;

         /*lui
        let toggleBalance = null;
        if (this.props.showBalance) {
            content = <><strong>Balance : </strong>$ {this.props.amount}</>
        }
         */

        return (
            <Section className="balance">
                {toggleBalance}
                <Button onClick={this.props.handleToggleBalance}>{buttonText}</Button>
            </Section>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}