import React, { Component } from "react";
import Header from "./Header";
import "../App.css";
import axios from "axios";

class ImageUploader extends React.Component {
  constructor() {
    super();
    this.state = {
      file: "",
      imagePreviewUrl: "",
      images: []
    };

    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleImageChange(selectorFiles: FileList) {
    // this.setState({
    //   file: selectorFiles[0]
    // });
    // let reader = new FileReader();
    // reader.onloadend = () => {
    // this.setState({
    //   file: file
    //     imagePreviewUrl: reader.result
    // });
    // };
    // reader.readAsDataURL(file);
  }

  _handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    console.log(e.target)
    data.append("myImage", this.uploadInput.files[0]);
    // axios({
    //   method: "post",
    //   url: "http://localhost:8080/api/images/upload",
    //   data: data,
    //   config: { headers: { "Content-Type": "multipart/form-data" } }
    // })
    //   .then(response => {
    //     response.json();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });


    axios.post('http://localhost:8080/api/images/upload', data)
      .then(response =>{
        response
      })
      .catch(error=>{
        console.log(error)
      })

  }

  render() {
    console.log(this.state.file);
    let imagePreviewUrl = this.state.imagePreviewUrl;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="previewComponent">
              <form
                onSubmit={e => this._handleSubmit(e)}
                encType="multipart/form-data"
              >
                <input
                  className="fileInput"
                  type="file"
                  name="myImage"
                  onChange={e => this._handleImageChange(e.target.files)}
                  ref={ref => {
                    this.uploadInput = ref;
                  }}
                />
                <button className="submitButton" type="submit">
                  Upload Image
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="imgPreview">{$imagePreview}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageUploader;
