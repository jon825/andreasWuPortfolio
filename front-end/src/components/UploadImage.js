import React, { Component } from "react";
import Header from "./Header";
import "../css/App.css";
import axios from "axios";

class UploadImage extends React.Component {
  constructor() {
    super();
    this.state = {
      file: "",
      imagePreviewUrl: "",
      images: [],
      loading:true,
      auth:false
    };

    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount(){
    if(localStorage.authToken !== undefined && localStorage.authToken !== null){
      console.log(localStorage)
      // window.location.href = "/uploadimage";
    }

  }


  _handleImageChange(selectorFiles: FileList) {
    let reader = new FileReader();
    let file = selectorFiles[0];
    console.log('file', file);
     reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  _handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("uploadFile", this.uploadInput.files[0]);
    if(this.uploadInput.files[0].name.includes('mp4')){
      console.log('sent')
      axios.post("http://localhost:3000/api/videos/upload/video", data)
      .then(response => {
        response;
      })
      .catch(error => {
        console.log(error);
      })

    }
    else if(this.uploadInput.files[0].name.includes('jpg')){
      axios.post("http://localhost:3000/api/images/upload/image", data)
      .then(response => {
        response;
      })
      .catch(error => {
        console.log(error);
      });
    }




  }

  render() {
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
      <div>
        <div className="row">
          <div className="col-lg-6">
            <div className="previewComponent">
              <form
                onSubmit={e => this._handleSubmit(e)}
                encType="multipart/form-data"
              >
                <input
                  className="fileInput"
                  type="file"
                  name="uploadFile"
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
          <div className="col-lg-6">
            <div className="imgPreview">{$imagePreview}</div>
          </div>
          </div>
      </div>
    );
  }

}

export default UploadImage;
