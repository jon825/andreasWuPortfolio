import React, { Component } from "react";
import Header from "./Header";
import "../css/App.css";
import axios from "axios";


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
        console.log(res)
      })
  }


  render() {
    console.log(this.state.images);
    let imagesArray;
    if(this.state.length != 0){
       imagesArray = this.state.images.map((image, i) => {
        let link = `http://localhost:8080/${image.filename}`
        return (
          <div className="col-lg-3 mb-3 photoGallery" key={image.id} >
            <img src={link} className="img-responsive" />
          </div>
        );
      });
     }

    return (
      <div>

        <div className="row">
          {imagesArray}
        </div>

      </div>
    );
  }
}

export default Photography;
