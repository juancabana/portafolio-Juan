import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Back.css";

class Back extends Component {
  render() {
    return (
      <div className="Back">
        <Link  className="button-back" to="/">
          {" "}
          <svg
          className="svg-back"
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
          >
            <path d="M34.35 35.85 22.65 24.15 34.35 12.45 36.5 14.6 26.95 24.15 36.5 33.7ZM12 36V12H15V36Z" />
          </svg>
        </Link>
      </div>
    );
  }
}

export default Back;
