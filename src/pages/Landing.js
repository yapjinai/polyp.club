import React, { Component } from "react";
import { Link } from "react-router-dom";
import best from "../img/best-or-what.png";
// import "../css/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <Link to={"/whoracle"}>
          <img src={best} alt="best" />
        </Link>
      </div>
    );
  }
}

export default Landing;
