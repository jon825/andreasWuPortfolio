import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Admin from './components/Admin';
import Photography from './components/Photography';
import Filmography from './components/Filmography';
import UploadImage from './components/UploadImage';





ReactDOM.render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/photography" exact component={Photography} />
        <Route path="/filmography" exact component={Filmography} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/uploadImage" exact component={UploadImage} />

      </Switch>
    </App>
  </Router>

  ), document.getElementById('app'));
