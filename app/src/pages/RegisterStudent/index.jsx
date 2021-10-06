import React from 'react';

import Header from '../../components/Header';

import './styles.css';

function RegisterStudent() {
  return(
    <section className="adm-register">
      <Header />
      <div className="div-adm-register">
        <div className="adm-register-title">Cadastrar Aluno</div>
        <form className="adm-register-form">
          <div className="input-register-student">
            <h4>Nome:</h4>
            <input type="text" placeholder="Nome da criança"/>
          </div>
          <div className="input-register-student">
            <h4>CPF do responsável:</h4>
            <input type="number" placeholder="CPF do responsável"/>
          </div>
          <div className="input-register-student">
            <h4>E-mail dos responsável:</h4>
            <input type="email" placeholder="E-mail do responsável" />
          </div>
          <div className="input-register-student">
            <h4>Endereço:</h4>
            <input type="text" placeholder="Endereço da criança"/>
          </div>
          <div className="input-register-student">
            <h4>CEP:</h4>
            <input type="number" placeholder="CEP da criança"/>
          </div>
        </form>
        <div className="adm-register-buttons">
            <button className="adm-cancel-register">Cancelar</button>
            <button className="adm-register-button">Cadastrar</button>
        </div>
      </div>
    </section>
  )
}

export default RegisterStudent;