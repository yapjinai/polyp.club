import React, { Component } from 'react';
import "../css/Whoracle.css";

import Ask from './components/Ask';
import Result from './components/Result';

class Whoracle extends Component {
  constructor() {
    super();
    this.state = {
      asked: false,
      question: ""
    }
  }

  render() {
    return (
      <div className="Whoracle">
        { this.state.asked ? this.renderResult() : this.renderAsk() }
      </div>
    );
  }

  renderResult = () => (
    <Result
      question={this.state.question}
      setWhoracleState={this.setWhoracleState}
    />
  )
  renderAsk = () => (
    <Ask
      question={this.state.question}
      setWhoracleState={this.setWhoracleState}
    />
  )

  setWhoracleState = (key, value=true) => {
    this.setState({
      [key]: value
    });
  }
}

export default Whoracle;
