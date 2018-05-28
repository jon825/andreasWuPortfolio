import React, { Component } from "react";
import Header from "./Header";
import { Player } from "video-react";
import axios from "axios";
import "../css/App.css";


class Videography extends Component {
  constructor() {
    super();
    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    axios.get("/api/videos/").then(res => {
      this.setState({
        videos: res.data
      });
      console.log(res);
    });
  }

  render() {
    let videosArray;
    if (this.state.length != 0) {
      videosArray = this.state.videos.map((image, i) => {
        let link = `/${image.filename}#t=2`;
            console.log(link)

        return (
          <div className="col-lg-4 mb-3 photoGallery" key={image.id}>
            <Player playsInline src={link} />
          </div>
        );
      });
    }
    return (
      <div className="videography-page">
        <div className="row">{videosArray}</div>
      </div>
    );
  }
}

export default Videography;
