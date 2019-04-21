import React, { Component } from "react";
import { Link } from "react-router-dom";
import best from "../img/best-or-what.png";
import "../css/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <h1>POLYP!</h1>
        Coming soon :o)
        <Link to={"/whoracle"}>
          <img src={best} alt="best" />
        </Link>
      </div>
    );
  }
}

export default Landing;
