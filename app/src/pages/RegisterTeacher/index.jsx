import React from 'react';

import Header from '../../components/Header';

import './styles.css';

function RegisterTeacher() {
  return(
    <section className="adm-register">
      <Header />
      <div className="div-adm-register">
        <div className="adm-register-title">Cadastrar Professor</div>
        <form className="adm-register-form">
          <div className="input-register-teacher">
            <h4>Nome:</h4>
            <input type="text" placeholder="Nome do professor"/>
          </div>
          <div className="input-register-teacher">
            <h4>CPF:</h4>
            <input type="number" placeholder="CPF do professor"/>
          </div>
          <div className="input-register-teacher">
            <h4>Endereço:</h4>
            <input type="text" placeholder="Endereço do professor"/>
          </div>
          <div className="input-register-teacher">
            <h4>CEP:</h4>
            <input type="number" placeholder="CEP do professor"/>
          </div>
          <div className="input-register-teacher">
            <h4>Celular:</h4>
            <input type="number" placeholder="Celular do professor"/>
          </div>
          <div className="input-register-teacher">
            <h4>E-mail:</h4>
            <input type="email" placeholder="E-mail do professor"/>
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

export default RegisterTeacher;