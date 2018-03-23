import React, { Component } from "react";
import axios from "axios";
import "../css/App.css";

class AdminSignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      confirmPassword: null,
      warning: ""
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    if (this.state.password != this.state.confirmPassword){
      this.setState({
        warning: "Password does not match"
      })
    } else {
      let admin = {
        username:this.state.username,
        password:this.state.password
      };
      axios.post("http://localhost:8080/api/admin/encrypt", admin)
      .then(response => {
        response;
        window.location.href = "/photography";
      })
      .catch(error =>{
        console.log(error);
      })
    }
  }

  txtFieldChange(e) {
    if (e.target.name === "username") {
      this.state.username = e.target.value;
    } else if (e.target.name === "password") {
      this.state.password = e.target.value;
    } else if (e.target.name === "confirmPassword") {
      this.state.confirmPassword = e.target.value;
    }
    this.setState({
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    });
  }


  render() {
    console.log(this.state)
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
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                onChange={this.txtFieldChange}
                name="confirmPassword"
                className="form-control"
                id="formControlConfirmPassword"
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

export default AdminSignUp;
