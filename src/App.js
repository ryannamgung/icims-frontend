import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AfnanNoWakey from "./AfnanNoWakey.js"
import AppBar from "./AppBar.js"
import MySlider from "./MySlider.js"

class App extends Component {
  constructor(){
    super()
    this.state = {
      weight: 190
    }
  }
  render() {
    return (
      <div className="App">
        <AppBar />
        <br/>
        <MySlider />
        <h1>Austin's Website</h1>
        <div> austin is like 21 ish and he does stuff at Rowan. Lifts frequently with stickbug Matthew Lawerence. </div>
        <AfnanNoWakey info={this.state}/>
      </div>
    );
  }
}

export default App;
