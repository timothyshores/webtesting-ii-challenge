import React from 'react';
import './App.css';

function Dashboard() {
    const handleStrike = () => {
        console.log('strihandleStrikeke')
    };

    const handleBall = () => {
        console.log('handleBall')
    };

    const handleFoul = () => {
        console.log('handleFoul')
    };

    const handleHit = () => {
        console.log('handleHit')
    };

    return (
        <div className="Dashboard">
            <h3>Dashboard Component</h3>
            <button onClick={handleStrike}>Strike</button>
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleFoul}>Foul</button>
            <button onClick={handleHit}>Hit</button>
        </div>
    );
}

export default Dashboard;
