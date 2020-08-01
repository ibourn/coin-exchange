import React, { Component } from 'react';
import logo from './logo.svg';
import paprikaLogo from "./coinpaprika.svg"

import styled from 'styled-components';

const Img = styled.img`
    height: 8rem; /*40vmin;*/
    pointer-events: none;
    `;


const Header = styled.header`
    background-color: #282c34;
    min-height: 20hv;/* 100vh;*/
   
    display: flex;
    flex-direction: row; /*column;*/
    align-items: center;
    justify-content: flex-start; /*center;*/
    font-size: 36px; /*calc(10px + 2vmin);*/
    color: white;
  `;

const H1 = styled.h1`
    font-size: 4rem;
    `;
  /*  const H1 = styled.h1`
    font-size: 2rem;
    line-height: 8rem;
    font-weight: bold;
    min-width: 300px;
    `;*/

    const Span = styled.span`
margin: 15px 0 0 10px;
    `;

    const SpanLink = styled.a`
margin-left: 5px;
    font-size: 0.7rem;
    font-style: italic;
    color:  #c2f0fc;
    `;

    const SvgPaprika = styled.img`
    padding: 10px 0 0 5px; 
    `;
  /*  const H1 = styled.h1`
    font-size: 2rem;
    line-height: 8rem;
    font-weight: bold;
    min-width: 300px;
    `;*/
export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header>
                <Img src={logo} alt="React logo" />
                <H1>
                    Coin Exchange
                </H1>
                <Span>
                <SpanLink className="d-inline-block" href="https://coinpaprika.com/">
      powered by
      
    <SvgPaprika src={paprikaLogo} width="100" height="30" className="d-inline-block align-bottom" alt="" loading="lazy"/>
   
  </SpanLink>
  </Span>
            </Header>
        )
    }
}
