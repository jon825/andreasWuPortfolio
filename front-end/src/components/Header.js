import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../css/App.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="col" align="center">
            <div className="header-title">
              <h2>
                <Link to="/" id="links">
                  ANDREAS WU
                </Link>
              </h2>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col" align="center">
            <div className="header-subtitle">
            <h3>Telling Stories Through The Lends</h3>
            </div>
            </div>
            </div>
            <div className="row">
              <div className="col" align="center">
                <div className="header-menu">
                  <ul>
                    <Link to="/about" id="img-links">
                      <li>
                        <h5>About</h5>
                      </li>
                    </Link>
                    <Link to="/photography" id="img-links">
                      <li>
                        <h5>Photography</h5>
                      </li>
                    </Link>
                    <Link to="/videography" id="img-links">
                      <li>
                        <h5>Videography</h5>
                      </li>
                    </Link>
                    <Link to="/contact" id="img-links">
                      <li>
                        <h5>Contact</h5>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>

        </div>
      </header>
    );
  }
}

export default Header;
