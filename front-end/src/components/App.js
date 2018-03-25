import React, { Component } from "react";
import Header from "./Header";
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
