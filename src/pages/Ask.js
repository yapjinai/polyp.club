import React, { Component } from 'react';

class Ask extends Component {
  render() {
    return (
      <div className="Ask">
        <form
          className="whoracleForm"
          onSubmit={this.handleSubmit}
        >
          <input
            className="whoracleInput"
            type="text"
            value={this.props.question}
            onChange={this.handleChange}
            placeholder="Ask a question"
          >
          </input>

          <br />

          <input
            className="whoracleSubmit"
            type="submit"
            value="Consult the Oracle"
          />
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    this.props.setWhoracleState("question", e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setWhoracleState("asked", true);
  }
}

export default Ask;
