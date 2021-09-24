import React, { Component } from 'react';
import './styles.css';
import '../../styles/global-styles.css';

/* import Header from '../../components/Header'; */

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
           /*  <div id="divRegister" className="formRegisterLogin">
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
            </div> */
        );
    }
}

export default Register;
