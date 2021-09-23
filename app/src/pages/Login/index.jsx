import React, { Component } from 'react';
import Header from '../../components/Header';
import './styles.css';

class Login extends Component {
    render() {
        return (
            <div className="loginPage">
                <Header />
                <form className="loginInputs">
                    <div className="inputs">
                        <label for="email">Email</label>
                        <input id="email" type="email" placeholder="Email"/>
                        <label for="password">Senha</label>
                        <input id="password" type="password" placeholder="Senha"/>
                        <div className="forgotPassword">
                            Esqueceu sua senha?
                            <div>
                                <button type="submit">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="notRegistered">
                        <div>
                            Ainda não é cadastrado?&nbsp;
                            <a href="/cadastrar">Cadastre-se aqui</a>
                        </div>
                        <div></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
