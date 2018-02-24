import React, { Component } from "react";
import Header from "./Header";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { black500 } from "material-ui/styles/colors";

import "../App.css";

const styles = {
  underlineStyle: {
    borderColor: black500
  }
};

class Contact extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App container ">
          <Header />
          <br />
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
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Contact;
