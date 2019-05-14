import React, { Component } from 'react';
import Display from './Display';
import Dashboard from './Dashboard';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ball: 0,
            strike: 0
        };
    }

    handleStrike = () => {
        this.setState(prevState => ({
            ball: prevState.strike === 2 ? 0 : prevState.ball,
            strike: prevState.strike === 2 ? 0 : ++prevState.strike,
        }));
    }

    handleBall = () => {
        this.setState(prevState => ({
            strike: prevState.ball === 3 ? 0 : prevState.strike,
            ball: prevState.ball === 3 ? 0 : ++prevState.ball
        }));
    }

    render() {
        return (
            <div className="App">
                <Display />
                <Dashboard
                    handleStrike={this.handleStrike}
                    handleBall={this.handleBall}
                />
            </div>
        );
    }

}

export default App;
