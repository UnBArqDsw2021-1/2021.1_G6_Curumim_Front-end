import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

import ClassList from '../pages/ClassList';
import EventDetail from '../pages/EventDetail';
import ResponsibleMenu from '../pages/ResponsibleMenu';
import Login from '../pages/Login';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/listar-turmas" component={ClassList} />
        <Route exact path="/detalhe-evento" component={EventDetail} />
        <Route exact path="/menu-responsavel" component={ResponsibleMenu} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default Routes;