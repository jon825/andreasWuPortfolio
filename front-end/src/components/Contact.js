import React, { Component } from "react";
import TextField from "material-ui/TextField";
import "../css/App.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      subject: "",
      message: ""
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }
  formSubmit(e) {
    e.preventDefault();
    let email = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
      subject: this.state.subject,
      message: this.state.message
    };
    console.log(this.state);
  }

  txtFieldChange(e) {
    if (e.target.name === "firstName") {
      this.state.firstName = e.target.value;
    } else if (e.target.name === "lastName") {
      this.state.lastName = e.target.value;
    } else if (e.target.name === "emailAddress") {
      this.state.emailAddress = e.target.value;
    } else if (e.target.name === "subject") {
      this.state.subject = e.target.value;
    } else if (e.target.name === "message") {
      this.state.message = e.target.value;
    }
    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
      subject: this.state.subject,
      message: this.state.message
    });
  }

  render() {
    return (
      <div className="contact-page">
        <div className="row">
          <div className="col">
            <p>
              <span>FOR BOOKINGS & COMMERCIAL ENQUIRIES</span> - Please contact
              Jacqueline Kok
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span>FOR GENERAL ENQUIRIES/PRESS</span> - Please use the contact
            form below.
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.formSubmit}>
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  onChange={this.txtFieldChange}
                  name="firstName"
                  className="form-control"
                  id="formControlFirstName"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-xs-12">
              <div className="form-group">
                <label>Last Name *</label>
                <input
                  onChange={this.txtFieldChange}
                  name="lastName"
                  className="form-control"
                  id="formControlLastName"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-xs-12">
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  onChange={this.txtFieldChange}
                  name="emailAddress"
                  className="form-control"
                  id="formControlEmailAddress"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-xs-12">
              <div className="form-group">
                <label>Subject *</label>
                <input
                  onChange={this.txtFieldChange}
                  name="subject"
                  className="form-control"
                  id="formControlSubject"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-xs-12">
              <div className="form-group">
                <label>Message *</label>
                <textarea
                  onChange={this.txtFieldChange}
                  className="form-control"
                  name="message"
                  id="FormControlMessage"
                  rows="6"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <button>Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
