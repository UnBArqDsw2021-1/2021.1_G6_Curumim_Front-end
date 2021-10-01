import React, { Component } from 'react';
import './styles.css';
import '../../styles/global-styles.css';

import Header from '../../components/Header';

class Register extends Component {
    render() {
        return (
            <section class='register-page'>
                <Header/>
                <form class="login-register-form">
                    <h1>Cadastro</h1>
                    
                    <div class="div-inputs">
                        <label>Nome</label>
                        <input type="text" name="Nome" placeholder="Nome" required="true"/>

                        <label>Nome</label>
                        <input type="text" name="Email" placeholder="Email" required="true"/>

                        <label>CPF</label>
                        <input type="text" name="CPF" placeholder="CPF" maxlength="11" required="true"/>

                        <label>Senha</label>
                        <input type="password" name="Senha" placeholder="Senha" required="true"/>

                        <button class="option-button" type="submit">Cadastrar</button>
                    </div>

                    <div className="notRegistered">
                        <span>Já é Cadastrado? <a href="/login">Faça Login</a></span>
                    </div> 
                </form>
            </section>
        );
    }
}

export default Register;
