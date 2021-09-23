import React, { Component } from 'react';
import Header from '../../components/Header';
import './styles.css';

class Register extends Component {
    render() {
        return (
            <div id="divRegister" className="formRegisterLogin">
                <Header />
                <h1>Cadastro</h1>
                <form>
                    <div>
                        <label className="defaultLabel" for="name">Nome</label>
                        <input className="defaultInput" id="name" type="text" placeholder="Nome"/>

                        <label className="defaultLabel" for="email">Email</label>
                        <input className="defaultInput" id="email" type="email" placeholder="Email"/>

                        <label className="defaultLabel" for="cpf">CPF</label>
                        <input className="defaultInput" id="cpf" type="number" placeholder="CPF"/>

                        <label className="defaultLabel" for="password">Senha</label>
                        <input className="defaultInput" id="password" type="password" placeholder="Senha"/>

                        <button className="defaultButton" type="submit">
                            Cadastrar
                        </button>
                    </div>
                    
                    <div className="notRegistered">
                        <div>
                            Já é cadastrado?&nbsp;
                            <a href="/cadastrar">Clique aqui.</a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
