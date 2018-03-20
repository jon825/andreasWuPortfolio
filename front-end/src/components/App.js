import React, { Component } from "react";
import Header from "./Header";
import Photography from "./Photography";
import Contact from "./Contact";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";
import "../css/App.css";


class App extends Component {
  render(){
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}

      </div>
    );
  }
}

export default App;
