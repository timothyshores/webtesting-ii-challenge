import React from 'react';
import './App.css';

const Dashboard = props => {
    const { ball, strike } = props

    return (
        <div className="Display">
            <div>
                <h2>BALL: {ball}</h2>
            </div>
            <div>
                <h3>STRIKE: {strike}</h3>
            </div>
        </div>
    );
}

export default Dashboard;
