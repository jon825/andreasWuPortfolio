import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import AdminSignUp from "./components/AdminSignUp";
import Photography from "./components/Photography";
import Videography from "./components/Videography";
import UploadImage from "./components/UploadImage";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/photography" exact component={Photography} />
        <Route path="/videography" exact component={Videography} />
        <Route path="/admin" exact component={Admin} />

        <Route path="/adminSignUp" exact component={AdminSignUp} />
        <Route path="/uploadImage" exact component={UploadImage} />
      </Switch>
    </App>
  </Router>,

  document.getElementById("app")
);
