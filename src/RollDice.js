import React, { Component } from 'react'
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };

    constructor (props) {
        super(props);
        this.state = {
            firstDice: "one",
            secondDice: "one",
            isRolling: false
        }
    }

    roll = (e) => {
        const rand1 = Math.floor(Math.random() * 6);
        const rand2 = Math.floor(Math.random() * 6);
        this.setState({
            firstDice: this.props.sides[rand1],
            secondDice: this.props.sides[rand2],
            isRolling: true
        });

        setTimeout( () => {
            this.setState({ isRolling: false });
        }, 1000)
    }

    render() {
        return(
            <div className="RollDice">
                <div className="RollDice-container">
                    <Dice i={this.state.firstDice} rolling={this.state.isRolling} />
                    <Dice i={this.state.secondDice} rolling={this.state.isRolling}/>   
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling} >{this.state.isRolling ? "Rolling..." : "Roll Dice!"}</button>    
            </div>
        );
    }
}

export default RollDice;