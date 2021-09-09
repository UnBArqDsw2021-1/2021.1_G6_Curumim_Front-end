import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default Routes;
