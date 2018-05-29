import React, { Component } from 'react';
import './App.css';
import BrowRouter from './router/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowRouter/>
      </div>
    );
  }
}

export default App;
