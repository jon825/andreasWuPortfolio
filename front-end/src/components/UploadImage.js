import React, { Component } from "react";
import "../css/App.css";
import axios from "axios";

class UploadImage extends React.Component {
  constructor() {
    super();
    this.state = {
      file: "",
      imagePreviewUrl: "",
      images: [],
      loading: true,
      auth: false,
      uploadMessage: ""
    };

    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (localStorage.authToken === "") {
      window.location.href = "/admin";
    }
  }

  logout(e) {
    e.preventDefault();
    localStorage.authToken = "";
    window.location.href = "/";
    console.log(localStorage);
  }

  _handleImageChange(selectorFiles: FileList) {
    let reader = new FileReader();
    let file = selectorFiles[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  _handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    if (this.uploadInput.files.length !== 0) {
      data.append("uploadFile", this.uploadInput.files[0]);
      if (this.uploadInput.files[0].name.includes("mp4")) {
        axios
          .post("http://localhost:8080/api/videos/upload/video", data)
          .then(response => {
            response;
            this.setState({
              uploadMessage: "Video successfully uploaded"
            });
          })
          .catch(error => {
            console.log(error);
            this.setState({
              uploadMessage:
                "Video unsuccessfully uploaded. Please make sure file is in mp4 format"
            });
          });
      } else if (this.uploadInput.files[0].name.includes("jpg")) {
        axios
          .post("http://localhost:8080/api/images/upload/image", data)
          .then(response => {
            response;
            this.setState({
              uploadMessage: "Image successfully uploaded"
            });
          })
          .catch(error => {
            this.setState({
              uploadMessage:
                "Image unsuccessfully uploaded. Please make sure file is in jpg format"
            });
            console.log(error);
          });
      }
    } else{
            this.setState({
        uploadMessage:"No file attached. Please attach file."
      })
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
      <div className="uploadImage-page">
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <div className="row">
              <div className="col" align="center">
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
            </div>
            <div className="row">
              <div className="col" align="center">
                {this.state.uploadMessage}
              </div>
            </div>
            <div className="row">
              <div className="col logout-button" align="center">
                <button onClick={this.logout}>Logout</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xs-12">
            <div className="imgPreview">{$imagePreview}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadImage;
