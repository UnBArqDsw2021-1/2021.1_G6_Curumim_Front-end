import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import StoreProvider from '../store/Provider';
import RoutesPrivate from './Private';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ClassList from '../pages/ClassList';
import ActivityDetail from '../pages/ActivityDetail';
import ScheduleDetail from '../pages/ScheduleDetail';
import EventDetail from '../pages/EventDetail';
import ResponsibleMenu from '../pages/ResponsibleMenu';
import ListTeachers from '../pages/ListTeachers'
import ActivityDetail from '../pages/ActivityDetail';
import ProfileCE from '../pages/ProfileCE';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <StoreProvider>
          <Switch>
            <RoutesPrivate exact path="/" component={Home} />
            <Route exact path="/cadastro" component={Register} />
            <Route exact path="/login" component={Login} />
            <RoutesPrivate exact path="/lista-turmas" component={ClassList} />
            <RoutesPrivate exact path="/detalhe-evento" component={EventDetail} />
            <RoutesPrivate exact path="/menu-responsavel" component={ResponsibleMenu} />
            <RoutesPrivate exact path="/lista-professores" component={ListTeachers} />
            <RoutesPrivate exact path="/detalhe-atividade/:value" component={ActivityDetail} />
            <RoutesPrivate exact path="/detalhe-agenda/:value" component={ScheduleDetail} />
            <RoutesPrivate exact path="/perfil-ce" component={ProfileCE} />
          </Switch>
        </StoreProvider>
      </BrowserRouter>
    );
  }
}

export default Routes;