import React from 'react';
import './App.css';

const Dashboard = props => {
    return (
        <div className="Dashboard">
            <button onClick={props.handleStrike}>Strike</button>
            <button onClick={props.handleBall}>Ball</button>
            <button onClick={props.handleFoul}>Foul</button>
            <button onClick={props.handleHit}>Hit</button>
        </div>
    );
}

export default Dashboard;
