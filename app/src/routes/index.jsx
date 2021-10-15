import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RoutesPrivate from './Private';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ClassList from '../pages/ClassList';
import EventDetail from '../pages/EventDetail';
import ResponsibleMenu from '../pages/ResponsibleMenu';
import RegisterClass from '../pages/RegisterClass';
import RegisterStudent from '../pages/RegisterStudent';
import RegisterTeacher from '../pages/RegisterTeacher';
import RegisterEvent from '../pages/RegisterEvent';
import RegisterActivity from '../pages/RegisterActivity';
import ActivityDetail from '../pages/ActivityDetail';
import ListTeachers from '../pages/ListTeachers'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cadastro" component={Register} />
          <Route exact path="/login" component={Login} />
          <RoutesPrivate exact path="/lista-turmas" component={ClassList} />
          <RoutesPrivate exact path="/detalhe-evento" component={EventDetail} />
          <RoutesPrivate exact path="/menu-responsavel" component={ResponsibleMenu} />
          <Route exact path="/cadastrar-turma" component={RegisterClass} />
          <Route exact path="/cadastrar-aluno" component={RegisterStudent} />
          <Route exact path="/cadastrar-professor" component={RegisterTeacher} />
          <Route exact path="/cadastrar-evento" component={RegisterEvent} />
          <Route exact path="/criar-atividade" component={RegisterActivity} />
          <RoutesPrivate exact path="/lista-professores" component={ListTeachers} />
          <RoutesPrivate exact path="/detalhe-atividade/:value" component={ActivityDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;