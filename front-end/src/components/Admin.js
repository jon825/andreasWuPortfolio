import React, { Component } from "react";
import "../css/App.css";

class Admin extends Component {
  render() {
    return (
      <form className="adminPage">
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label for="exampleFormControlInput1">Username:</label>
              <input
                type="username"
                class="form-control"
                id="formControlUsername"
                placeholder="admin"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label for="formControlPassword">Password:</label>
              <input
                type="password"
                class="form-control"
                id="formControlPassword"
                placeholder="****"
              />
            </div>
          </div>
        </div>
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
