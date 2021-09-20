import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ClassList from '../pages/ClassList';
import EventDetail from '../pages/EventDetail';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/listar-turmas" component={ClassList} />
        <Route exact path="/detalhe-evento" component={EventDetail} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default Routes;