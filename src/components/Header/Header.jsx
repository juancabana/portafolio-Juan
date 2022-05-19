import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className="nav-wrapper">
          <div className="img-container">
            JC
          </div>

          <div className="list-wrapper">
            <Link className="links" to="/">
              Home.
            </Link>
            <a className="links" href="portafolio-Juan/#About">
              About.
            </a>
            <a className="links" href="portafolio-Juan/#Skills">
              Skills.
            </a>
  
            <Link className="links" to="/contact
            ">
              Contact.
            </Link>
          </div>

          <div className="wrapper-title-name">
            <h3 className="title-name">Juan Cabana.</h3>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
