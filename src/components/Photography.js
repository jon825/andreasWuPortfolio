import React, { Component } from "react";
import Header from "./Header";
import "../App.css";

const images = [{id:0, string:"chaps_1x.jpg"},{id:1, string:"chaps_1x.jpg"},{id:2, string:"chaps_1x.jpg"},{id:3, string:"chaps_1x.jpg"},{id:4, string:"chaps_1x.jpg"},{id:5, string:"chaps_1x.jpg"}];



class Photography extends Component {
  render() {
    let imagesArray=images.map((image, i)=>{
      return(
       <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12" key={i}>
        <img
          src={require(`../img/${image.string}`)}
          className="photoGallery"
        />
        </div>
      )
    })


    return (
      <div className="App container ">
        <Header />
        <div className="row">
          {imagesArray}
        </div>


      </div>
    );
  }
}


export default Photography;
