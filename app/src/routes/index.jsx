import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro" component={Register} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default Routes;
