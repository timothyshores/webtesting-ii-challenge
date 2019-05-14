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
        this.setState((prevState, { strike }) => ({
            strike: prevState.strike === 3 ? 0 : prevState.strike + 1
        }));
        console.log('this.state.strike', this.state.strike);
    };

    handleBall = () => {
        console.log('handleBall')
    };

    handleFoul = () => {
        console.log('handleFoul')
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
