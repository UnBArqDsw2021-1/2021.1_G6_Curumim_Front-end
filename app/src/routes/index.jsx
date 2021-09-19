import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro'
import CriarTurma from '../pages/CriarTurma'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/criar_turma" component={CriarTurma} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default Routes;
