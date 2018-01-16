import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import '../App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h1><Link to="/" id="links">ANDREAS WU</Link></h1>
        </div>
        <br />
        <h5>TELLING STORIES THROUGH THE LENS</h5>
        <br />
      </div>
    );
  }
}

export default Header;



