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

    render() {
        return (
            <div className="App">
                <Display />
                <Dashboard />
            </div>
        );
    }

}

export default App;
