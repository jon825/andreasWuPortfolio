import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import App from './components/App';
import Contact from './components/Contact';
import Photography from './components/Photography';
import Filmography from './components/Filmography';
import ImageUploader from './components/ImageUploader';





ReactDOM.render((
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/image-uploader" exact component={ImageUploader} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/photography" exact component={Photography} />
      <Route path="/filmography" exact component={Filmography} />
    </Switch>
  </Router>

  ), document.getElementById('app'));
