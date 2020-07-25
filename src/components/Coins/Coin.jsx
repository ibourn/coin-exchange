import React, { Component } from 'react';
//import './Coin.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';
 
const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;


export default class Coin extends Component {
    //Si que du statique (props) sans modification => pas besoin de constructeur
    //Si modif ou state => besoin constructeur ET super dedans
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        //on associe handle à un contexte (qui contient les valeurs sinon vide => Nan) 
        //on le lie au this du composant pour avoir accès à son this
        this.handleClick = this.handleClick.bind(this);
    }
    /*
    //permet de catcher les états et leurs valeurs quand le doc est monté
    componentDidMount() {
        const callback = () => {
            //set the state to a new random value
            const randomPercentage = 0.995 + Math.random() * 0.01;

            //DON'T DO THIS
            //this.state.price = this.state.price * random

            this.setState( function(oldState) {
                return {
                    price: oldState.price * randomPercentage
                };
            });

            //ou
           // this.setState({price: oldState.price * randomPercentage})
        }
        //on fait appel à un callback tte les  secondes
        setInterval( callback, 1000 );

    }
    */

    handleClick(event) {
        // Prevent the default action of submitting the form
        event.preventDefault();

        const randomPercentage = 0.995 + Math.random() * 0.01;

        this.setState( function(oldState) {
            return {
                price: oldState.price * randomPercentage
            };
        });

    }

    //plus besoin de : <tr className="coin-row">
    render() {
            return(
                <tr>
                  <Td>{this.props.name}</Td>
                  <Td>{this.props.ticker}</Td>
                  <Td>${this.state.price}</Td>
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