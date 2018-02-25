import React, { Component } from "react";
import Header from "./Header";
import "../App.css";
import axios from "axios";

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
  constructor(){
    super();
    this.state = {
      images:[]
    }
  }

  componentDidMount(){
    axios.get("http://localhost:8080/api/images/")
      .then((res)=>{
        this.setState({
          images:res.data
        })
      })
  }


  render() {
    console.log(this.state.images);
    let imagesArray;
    if(this.state.length != 0){
       imagesArray = this.state.images.map((image, i) => {
        console.log(image.filename)
        return (
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" key={image.id} >
            <img src={`http:localhost:8080/DSC_0531.jpg`} className="img-responsive photoGallery" />
          </div>
        );
      });
     }

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
