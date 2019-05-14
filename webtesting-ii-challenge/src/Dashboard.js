import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ball: 0,
            strike: 0
        };
    };

    handleStrike = () => {
        this.props.handleStrike();
    };

    handleBall = () => {
        this.setState(prevState => ({
            strike: prevState.ball === 3 ? 0 : prevState.strike,
            ball: prevState.ball === 3 ? 0 : ++prevState.ball
        }));
    };

    handleFoul = () => {
        this.setState((prevState, { strike }) => ({
            strike: prevState.strike > 1 ? prevState.strike : ++prevState.strike
        }));
        console.log('handleFoul')
        console.log('this.state.strike', this.state.strike);
    };

    handleHit = () => {
        console.log('handleHit')
    };

    render() {
        return (
            <div className="Dashboard">
                <h3>Dashboard Component</h3>
                <button onClick={this.handleStrike}>Strike</button>
                <button onClick={this.handleBall}>Ball</button>
                <button onClick={this.handleFoul}>Foul</button>
                <button onClick={this.handleHit}>Hit</button>
            </div>
        );
    }

}

export default Dashboard;
