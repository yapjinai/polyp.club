import React, { Component } from "react";
import randomSearch from "../../utils/google"
import questionToQueries from "../../utils/questionToQueries"
import "../../css/Result.css";

const API_URL = "https://whoracle-api.herokuapp.com"

class Result extends Component {
  constructor() {
    super();
    this.state = {
      images: {}
    }
  }

  render() {
    console.log(this.state.images);
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

  consult = async (question) => {
    // Wiki API
    const queries = await questionToQueries(question)

    // Google API
    let images = [];
    for (const query of queries) {
      const image = await randomSearch(query);
      if (image && images) {
        images.push(await image);
      }
      else {
        images = image
      }
    }

    this.setState({images})
  }

  renderImages = () => {
    if (Object.keys(this.state.images).length) {
      this.saveToApi()
      return (
        <ul>
          {this.displayImages()}
        </ul>
      )
    }
  }

  saveToApi = () => {
    fetch(`${API_URL}/readings`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        reading: {
          question: this.props.question,
          images: Object.values(this.state.images)
        }
      })
    })
    .then(r => r.json())
    .then(console.log)
  }

  displayImages = () => {
    return (
      Object.keys(this.state.images).map(query => {
        return this.mapUrlToImg(this.state.images[query], query)
      })
    )
  }

  mapUrlToImg = (url, alt="") => {
    return (
      <li
        key={url}
      >
        <img
          src={url}
          alt={alt}
        />
      </li>
    )
  }

  reset = (e) => {
    e.preventDefault();
    this.props.setWhoracleState("question", "");
    this.props.setWhoracleState("asked", false);
    this.setState({
      images: []
    })
  }

  oracleFinished = () => {
    return (
      <h2>
      The Oracle has retired for the day. Please try again tomorrow.
      </h2>
    )
  }
}

export default Result;
