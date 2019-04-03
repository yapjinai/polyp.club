import React, { Component } from 'react';
import best from '../img/best-or-what.png';
import '../css/App.css';

const whoracleURL = 'http://whoracle.herokuapp.com'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>POLYP!</h1>
        Coming soon :o)
        <a href={whoracleURL}>
          <img src={best} alt='best' />
        </a>
      </div>
    );
  }
}

export default App;
