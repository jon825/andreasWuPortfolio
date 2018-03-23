import React, { Component } from "react";
import Header from "./Header";
import { Player } from "video-react";
import axios from "axios";

import "../css/App.css";

class Videography extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/videos/").then(res => {
      this.setState({
        images: res.data
      });
      console.log(res);
    });
  }

  render() {
    console.log(this.state.images);
    let imagesArray;
    if (this.state.length != 0) {
      imagesArray = this.state.images.map((image, i) => {
        let link = `http://localhost:8080/${image.filename}`;
        return (
          <div className="col-lg-3 mb-3 photoGallery" key={image.id}>
            <Player playsInline poster={link} src={link} />{" "}
          </div>
        );
      });
    }
    return (
      <div>
        <div className="row">{imagesArray}</div>
      </div>
    );
  }
}

export default Videography;
