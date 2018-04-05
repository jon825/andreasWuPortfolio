import React, { Component } from "react";
import Header from "./Header";
import Photography from "./Photography";
import Contact from "./Contact";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import axios from "axios";
import "../css/App.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/images/").then(res => {
      this.setState({
        images: res.data
      });
    });
  }

  render() {
    let images;
    if (this.state.images.length !== 0) {
      images = this.state.images.map((image, index) => {
        return `http://localhost:8080/images/${image.filename}`;
      });
    } else{
      return images=[];
    }
    console.log(this.state.images)



    return (
      <div className="home-page">
        <div className="row">
          <div className="col" align="center">
            <div className="slideShow">
              <Slide
                images={images}
                duration={5000}
                transitionDuration={1000}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
