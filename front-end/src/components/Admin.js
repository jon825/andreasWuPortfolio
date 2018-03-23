import React, { Component } from "react";
import "../css/App.css";
const axios = require("axios");

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    let admin = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("http://localhost:8080/api/admin/login", admin)
      .then((response) => {
        if (response.status === 200) {

          localStorage.authToken = "hello world";
          window.location.href = "/uploadimage";
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  txtFieldChange(e) {
    if (e.target.name === "username") {
      this.state.username = e.target.value;
    } else if (e.target.name === "password") {
      this.state.password = e.target.value;
    }
    this.setState({
      username: this.state.username,
      password: this.state.password
    });
  }


  render() {

    return (
      <form className="adminPage" onSubmit={this.formSubmit}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Username:</label>
              <input
                onChange={this.txtFieldChange}
                name="username"
                className="form-control"
                id="formControlUsername"
                placeholder="admin"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Password:</label>
              <input
                onChange={this.txtFieldChange}
                name="password"
                className="form-control"
                id="formControlPassword"
                placeholder="****"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <button>Sign In</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Admin;
