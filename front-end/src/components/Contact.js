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
                  <label for="exampleFormControlInput1">First Name *</label>
                  <input
                    type="firstName"
                    class="form-control"
                    id="formControlFirstName"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label for="exampleFormControlInput1">Last Name *</label>
                  <input
                    type="lastName"
                    class="form-control"
                    id="formControlLastName"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label for="exampleFormControlInput1">Email Address *</label>
                  <input
                    type="email"
                    class="form-control"
                    id="formControlEmailAddress"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label for="exampleFormControlInput1">Subject *</label>
                  <input
                    type="subject"
                    class="form-control"
                    id="formControlSubject"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
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
        /*
          <div className="row">
            <div className="col-lg-6">
              <TextField
                hintText="Name"
                underlineFocusStyle={styles.underlineStyle}
              />
              <br />
              <br />

              <TextField
                hintText="Email"
                underlineFocusStyle={styles.underlineStyle}
              />
              <br />
              <br />

              <TextField
                hintText="Phone"
                underlineFocusStyle={styles.underlineStyle}
              />
            </div>
            <div className="col-lg-6">
              <TextField
                hintText="Message Field"
                underlineFocusStyle={styles.underlineStyle}
                multiLine={true}
                rows={1}
                fullWidth={true}
              />
            </div>
          </div>
          <div className="row">
            <div className="col sendButton">
              <button>Send</button>
            </div>
          </div>
        </div>
      */
    );
  }
}

export default Contact;
