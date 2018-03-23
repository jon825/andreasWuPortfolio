import React, { Component } from "react";
import Header from "./Header";
import TextField from "material-ui/TextField";
import "../css/App.css";


class Contact extends Component {
  render() {
    return (
        <div className="contact-page">
          <div className="row">
            <div className="col">
              <p>
                <span>FOR BOOKINGS & COMMERCIAL ENQUIRIES</span> - Please
                contact Jacqueline Kok
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
          <form>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    type="firstName"
                    className="form-control"
                    id="formControlFirstName"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    type="lastName"
                    className="form-control"
                    id="formControlLastName"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="formControlEmailAddress"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    type="subject"
                    className="form-control"
                    id="formControlSubject"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>
                    Message *
                  </label>
                  <textarea
                    className="form-control"
                    type="message"
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
