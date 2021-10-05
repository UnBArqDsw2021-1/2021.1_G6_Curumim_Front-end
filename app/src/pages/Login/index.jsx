import React, { Component } from 'react';
import Header from '../../components/Header';
import './styles.css';

class Login extends Component {
    render() {
        return (
            <div id="divLogin" className="formRegisterLogin">
                <Header />
                <form>
                    <div>
                        <label className="defaultLabel" for="email">Email</label>
                        <input className="defaultInput" id="email" type="email" placeholder="Email"/>

                        <label className="defaultLabel" for="password">Senha</label>
                        <input className="defaultInput" id="password" type="password" placeholder="Senha"/>

                        <div className="forgotPassword">
                            Esqueceu sua senha?
                        </div>
                        <button id="login-button" className="defaultButton" type="submit">
                            Login
                        </button>
                    </div>
                    <div className="notRegistered">
                            Ainda não é cadastrado?&nbsp;
                            <a href="/cadastrar">Cadastre-se aqui</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
