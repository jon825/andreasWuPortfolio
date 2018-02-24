import React, { Component } from "react";
import Header from "./Header";
import "../App.css";

const images = [
  { id: 0, string: "DSC_0398" },
  { id: 1, string: "DSC_0444" },
  { id: 2, string: "DSC_0531" },
  { id: 3, string: "DSC_1039" },
  { id: 4, string: "DSC_1263" },
  { id: 5, string: "DSC_1989" },
  { id: 6, string: "DSC_2016" },
  { id: 7, string: "DSC_2038" },
  { id: 8, string: "DSC_2086" }
];

class Photography extends Component {
  render() {
    let imagesArray = images.map((image, i) => {
      return (
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <img src={require(`../img/${image.string}.jpg`)} key={image.id} className="img-responsive photoGallery" />
        </div>


      );
    });

    return (
      <div className="App container">
        <div className="row">
          <Header />
          PHOTOGRAPHY
        </div>
        <br />
        <div className="row photo-gallery">
          {imagesArray}
        </div>

      </div>
    );
  }
}

export default Photography;
