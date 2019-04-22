import React, { Component } from 'react';
import randomSearch from '../../utils/google'
import questionToQueries from '../../utils/questionToQueries'
import '../../css/Result.css';

class Result extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  render() {
    return (
      <div className="Result">
        <h2>Your question: {this.props.question}</h2>

        <div className="answer">
          Your results:
          {this.state.images ? this.renderImages() : this.oracleFinished()}
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

  componentDidMount() {
    this.consult(this.props.question);
  }

  oracleFinished = () => {
    return (
      <h2>
        The Oracle is done for today. Please try again tomorrow.
      </h2>
    )
  }

  renderImages = () => {
    return (
      <ul>
        {this.state.images.map(this.mapUrlToImg)}
      </ul>
    )
  }

  consult = async (question) => {
    // Wiki API
    const queries = await questionToQueries(question)

    // Google API
    for (const query of queries) {
      const image = await randomSearch(query);
      if (image) {
        this.setState({
          images: [...this.state.images, image]
        })
      }
      else {
        this.setState({
          images: image
        })
      }
    }
  }

  mapUrlToImg = (url) => {
    return (
      <li
        key={url}
      >
        <img
          src={url}
          alt={url}
        />
      </li>
    )
  }

  reset = (e) => {
    e.preventDefault();
    // this.props.clearImages();
    // this.props.setQuestion('');
    this.props.setWhoracleState("question", "");
    this.props.setWhoracleState("asked", false);
    this.setState({
      images: []
    })
  }
}

export default Result;