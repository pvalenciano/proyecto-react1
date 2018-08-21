import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1 class="h4">titulo navegacion</h1>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />

      </div>
    );
  }
}

export default App;
