import React from 'react';

import Header from '../../components/Header';

import './styles.css';

function RegisterEvent() {
  return(
    <section className="adm-register">
      <Header />
      <div className="div-adm-register">
        <div className="adm-register-title">Cadastrar Evento</div>
        <form className="adm-register-form">
          <div className="input-register-event">
              <h4>Nome:</h4>
              <input type="text" placeholder="Nome do evento"/>
          </div>
          <div className="input-register-event">
              <h4>Descrição:</h4>
              <input type="text" placeholder="Nome do evento"/>
          </div>
          <div className="input-register-event">
              <h4>Data:</h4>
              <input type="date" placeholder="Data do evento"/>
          </div>
          <div className="input-register-event">
              <h4>Local:</h4>
              <input type="text" placeholder="Local do evento"/>
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

export default RegisterEvent;