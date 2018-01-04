import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './components/App';
import Contact from './components/Contact';
import Photography from './components/Photography';
import Filmography from './components/Filmography';



ReactDOM.render((
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/photography" exact component={Photography} />
      <Route path="/filmography" exact component={Filmography} />

    </Switch>
  </Router>

  ), document.getElementById('app'));
