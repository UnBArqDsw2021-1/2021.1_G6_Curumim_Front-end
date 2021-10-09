import React, { useState } from 'react';

import Header from '../../components/Header';

import './styles.css';

function RegisterActivity() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [thisClass, setThisClass] = useState('');

  const activity = {
    title: title,
    description: description,
    date: date,
    class: thisClass
  }

  return(
    <section className="adm-register">
      <Header />
      <div className="div-adm-register">
        <div className="adm-register-title">Criar Atividade</div>
        <form className="adm-register-form">
          <div className="input-register-activity">
            <h4>Título:</h4>
            <input type="text" placeholder="Nome da atividade" onChange={(e) => setTitle(e.currentTarget.value)}/>
          </div>
          <div className="input-register-activity">
            <h4>Descrição:</h4>
            <textarea cols="35" rows="3" placeholder="Descrição da atividade" onChange={(e) => setDescription(e.currentTarget.value)}></textarea>
          </div>
          <div className="input-register-activity">
            <h4>Data:</h4>
            <input type="date" placeholder="Data da atividade" onChange={(e) => setDate(e.currentTarget.value)}/>
          </div>
          <div className="input-register-activity">
            <h4>Turma</h4>
            <input type="text" placeholder="Turma" onChange={(e) => setThisClass(e.currentTarget.value)}/>
          </div>
        </form>
        <div className="adm-register-buttons">
            <button className="adm-cancel-register">Cancelar</button>
            <button className="adm-register-button" onClick={() => console.log(activity)}>Cadastrar</button>
        </div>
      </div>
    </section>
  )
}

export default RegisterActivity