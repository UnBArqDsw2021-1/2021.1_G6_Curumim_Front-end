import React, { useState } from 'react';

import Header from '../../components/Header';

import './styles.css';

function RegisterTeacher() {
  const [name, setName] = useState('');
  const [cpfValue, setCPF] = useState('');
  const [address, setAdress] = useState('');
  const [cep, setCEP] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');

  const addedTeacher = {
    name: name,
    cpf: cpfValue,
    address: address,
    cep: cep,
    cellphone: cellphone,
    email: email
  }

  return(
    <section className="adm-register">
      <Header />
      <div className="div-adm-register">
        <div className="adm-register-title">Cadastrar Professor</div>
        <form className="adm-register-form">
          <div className="input-register-teacher">
            <h4>Nome:</h4>
            <input type="text" placeholder="Nome do professor" onChange={(e) => setName(e.currentTarget.value)}/>
          </div>
          <div className="input-register-teacher">
            <h4>CPF:</h4>
            <input type="number" placeholder="CPF do professor" onChange={(e) => setCPF(e.currentTarget.value)}/>
          </div>
          <div className="input-register-teacher">
            <h4>Endereço:</h4>
            <input type="text" placeholder="Endereço do professor" onChange={(e) => setAdress(e.currentTarget.value)}/>
          </div>
          <div className="input-register-teacher">
            <h4>CEP:</h4>
            <input type="number" placeholder="CEP do professor" onChange={(e) => setCEP(e.currentTarget.value)}/>
          </div>
          <div className="input-register-teacher">
            <h4>Celular:</h4>
            <input type="number" placeholder="Celular do professor" onChange={(e) => setCellphone(e.currentTarget.value)}/>
          </div>
          <div className="input-register-teacher">
            <h4>E-mail:</h4>
            <input type="email" placeholder="E-mail do professor" onChange={(e) => setEmail(e.currentTarget.value)}/>
          </div>
        </form>
        <div className="adm-register-buttons">
            <button className="adm-cancel-register">Cancelar</button>
            <button className="adm-register-button" onClick={() => console.log(addedTeacher)}>Cadastrar</button>
        </div>
      </div>
    </section>
  )
}

export default RegisterTeacher;