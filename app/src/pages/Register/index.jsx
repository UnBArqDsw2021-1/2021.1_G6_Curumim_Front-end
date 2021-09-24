import React, { Component } from 'react';
import './styles.css';
import '../../styles/global-styles.css';

class Register extends Component {
    render() {
        return (
            <section class='register-page'>
                <form>
                    <h1 class="title">Register</h1>
                    
                    <div class="div-inputs">
                        <span>Nome</span>
                        <input type="text" name="Nome" placeholder="Nome" required="true"/>

                        <span>Nome</span>
                        <input type="text" name="Email" placeholder="Email" required="true"/>

                        <span>CPF</span>
                        <input type="text" name="CPF" placeholder="CPF" required="true"/>

                        <span>Senha</span>
                        <input type="password" name="Senha" placeholder="Senha" required="true"/>
                    </div>

                    <button class="option-button" type="submit">Cadastrar</button>
                </form>
            </section>
        );
    }
}

export default Register;