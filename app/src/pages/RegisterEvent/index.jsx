import React, { useState } from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import './styles.css';

function RegisterEvent() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [local, setLocal] = useState('');

  const addedEvent = {
    name: name,
    description: description,
    date: date,
    local: local  
  }

  return(
    <section className="adm-register">
      <Header />
      <div className="div-adm-register">
        <div className="adm-register-title">Cadastrar Evento</div>
        <form className="adm-register-form">
          <div className="input-register-event">
              <h4>Nome:</h4>
              <input type="text" placeholder="Nome do evento" onChange={(e) => setName(e.currentTarget.value)}/>
          </div>
          <div className="input-register-event">
              <h4>Descrição:</h4>
              <textarea cols="35" rows="3" placeholder="Descrição da atividade" onChange={(e) => setDescription(e.currentTarget.value)}/>
          </div>
          <div className="input-register-event">
              <h4>Data:</h4>
              <input type="date" placeholder="Data do evento" onChange={(e) => setDate(e.currentTarget.value)}/>
          </div>
          <div className="input-register-event">
              <h4>Local:</h4>
              <input type="text" placeholder="Local do evento" onChange={(e) => setLocal(e.currentTarget.value)}/>
          </div>
        </form>
        <div className="adm-register-buttons">
            <button className="adm-cancel-register">Cancelar</button>
            <button className="adm-register-button" onClick={() => console.log(addedEvent)}>Cadastrar</button>
        </div>
      </div>
    </section>
  )
}

export default RegisterEvent;