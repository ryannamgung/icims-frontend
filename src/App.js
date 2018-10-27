import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AfnanNoWakey from "./AfnanNoWakey.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Austins Website</h1>
        <div> austin is like 21 ish and he does stuff at Rowan. Lifts frequently with stickbug Matthew Lawerence. </div>
        <AfnanNoWakey />
      </div>
    );
  }
}

export default App;
