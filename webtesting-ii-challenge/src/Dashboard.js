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

    render() {
        return (
            <div className="Dashboard">
                <h3>Dashboard Component</h3>
                <button onClick={this.props.handleStrike}>Strike</button>
                <button onClick={this.props.handleBall}>Ball</button>
                <button onClick={this.props.handleFoul}>Foul</button>
                <button onClick={this.props.handleHit}>Hit</button>
            </div>
        );
    }

}

export default Dashboard;
