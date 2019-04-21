import React, { Component } from 'react';
// import Images from './Images'

class Result extends Component {
  render() {
    return (
      <div className="Result">
        <h2>Your question: {this.props.question}</h2>

        <div className="answer">
          Your results:


        </div>

        <div className="reset">
          <button
            onClick={this.reset}
          >
            Ask a different question
          </button>
        </div>

      </div>
    );
  }

  reset = (e) => {
    e.preventDefault();
    // this.props.clearImages();
    // this.props.setQuestion('');
    this.props.setWhoracleState("question", "");
    this.props.setWhoracleState("asked", "false");
  }
}

export default Result;
