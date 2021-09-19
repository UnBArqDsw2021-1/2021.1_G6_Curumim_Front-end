import React, { Component } from 'react';
import './styles.css';
import '../../styles/global-styles.css';

class Cadastro extends Component {
    render() {
        return (
            <section>
                <h1>Criar Turma</h1>
                <div class="page-body">
                    <h2>Cadastrar Turma</h2>
                    <form class="form-body" action="">
                        <div>
                            <select name="ano">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>

                            <select name="turma">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div id="line"></div>
                        <div>
                            <h3>Inscrever Professor</h3>
                        </div>
                        <div id="line"></div>
                        <div>
                            <h3>Inscrever Aluno</h3>
                            <div>

                            </div>
                        </div>

                        <button class="option-button" type="submit">Preencher</button>
                    </form>
                </div>  
            </section>
        );
    }
}

export default Cadastro;