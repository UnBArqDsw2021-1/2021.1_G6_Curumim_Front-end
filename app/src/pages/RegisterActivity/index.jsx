import React from 'react';

import Header from '../../components/Header';

import './styles.css';

function RegisterActivity() {
  return(
    <section className="adm-register">
      <Header />
      <div className="div-adm-register">
        <div className="adm-register-title">Criar Atividade</div>
        <form className="adm-register-form">
          <div className="input-register-activity">
            <h4>Título:</h4>
            <input type="text" placeholder="Nome da atividade"/>
          </div>
          <div className="input-register-activity">
            <h4>Descrição:</h4>
            <textarea cols="35" rows="3" placeholder="Descrição da atividade"></textarea>
          </div>
          <div className="input-register-activity">
            <h4>Data:</h4>
            <input type="date" placeholder="Data da atividade"/>
          </div>
          <div className="input-register-activity">
            <h4>Turma</h4>
            <input type="text" placeholder="Data da atividade"/>
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

export default RegisterActivity