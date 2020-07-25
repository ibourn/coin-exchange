import React, { Component } from 'react';
import './Coin.css';
import PropTypes from 'prop-types';


export default class Coin extends Component {
    //SI que render du static : les props
    //pas beson de constructeur
    //si function on appel à states... besoin constructeur
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        //on associe handle à un context (qu contient les valeur
        //sinon vide => Nan) 
        //ici on le lie au coposant pour avoir accès à son this
        //et besoin this. this. car c'est son nom on réference à lui même
        this.handleClick = this.handleClick.bind(this);
    }
    /*
    //permet d'attraper la valeur des etats qd document est monté
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
        //on fait appel a callback tt seconde
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

    render() {
            return(
                <tr className="coin-row">
                  <td>{this.props.name}</td>
                  <td>{this.props.ticker}</td>
                  <td>${this.state.price}</td>
                  <td>
                      <form action="">
                          <button onClick={this.handleClick}>Refresh</button>
                      </form>
                  </td>
                </tr>
              );

    }
}
//l12 $ pour signe $ ds html pas de tidddle

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}