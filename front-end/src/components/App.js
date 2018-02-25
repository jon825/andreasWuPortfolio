import React, { Component } from "react";
import Header from "./Header";
import Photography from "./Photography";
import Contact from "./Contact";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };

  }

  componentDidMount() {
    setTimeout(() => {

        this.setState({
          loading:false
      }),
        6000;
    });
  }


  render() {
    const loading = this.state.loading;

    if (loading) {
      return <div className="loader" />;
    }

    return (
      <div className="App container ">
        <Header />
        <div className="front-page row">
          <div className="hover-img col-lg-6 col-md-6 col-sm-12 nopadding">
            <Link to="/photography" id="links">
              <img
                src={require("../images/Andreas_Selects _5.jpg")}
                className="image"
              />
              <div className="overlay">
                <div className="text">PHTOGRAPHY</div>
              </div>
            </Link>
          </div>

          <div className="hover-img col-lg-6 col-md-6 col-sm-12 nopadding">
            <Link to="/filmography" id="links">
              <img src={require("../images/DSC_1263.jpg")} className="image" />
              <div className="overlay">
                <div className="text">VIDEOGRAPHY</div>
              </div>
            </Link>
          </div>
        </div>
        <br />
        <h4>
          <Link to="/contact" id="links">
            CONTACT
          </Link>
        </h4>
      </div>
    );
  }
}

export default App;
