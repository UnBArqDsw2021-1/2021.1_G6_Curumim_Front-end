import React, { useState } from 'react';

import adm from '../../services/admAPIRequests'

import Header from '../../components/Header';

import './styles.css';

async function registeringTeacher(teacher, token) {
  try {
      var res = await adm.registerTeacher(token)
      console.log(token, res)

      if (res.status === 200) {
          return res.data
      }
  } catch (err){
      console.log(teacher)
      return { response: null, error: 'Professor já cadastrado' }
  }
}

function RegisterTeacher() {
  const [name, setName] = useState(null);
  const [cpfValue, setCPF] = useState(null);
  const [email, setEmail] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null)

  async function onSubmit(event) {
    event.preventDefault();

    setLoading(true);

    const { response, error } = await registeringTeacher(addedTeacher)

    setLoading(false);
    setError(error);
  }

  let errorLoginMessage;
  let loginLoading;

  if (error) {
    errorLoginMessage = error
    setTimeout(() => {
        setError(null)
    }, 4000)
  }

  if (loading) {
    loginLoading = <div className="lds-dual-ring"></div>
  }

  const addedTeacher = {
    usertype: 1,
    name: name,
    cpf: cpfValue,
    email: email,
    birthday: birthday,
    password: password,
    registration: 15
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
            <h4>Data de nascimento:</h4>
            <input type="date" placeholder="Dia de nascimento do professor" onChange={(e) => setBirthday(e.currentTarget.value)}/>
          </div>
          <div className="input-register-teacher">
            <h4>E-mail:</h4>
            <input type="email" placeholder="E-mail do professor" onChange={(e) => setEmail(e.currentTarget.value)}/>
          </div>
          <div className="input-register-teacher">
            <h4>Senha</h4>
            <input type="text" placeholder="Senha de acesso para o professor" onChange={(e) => setPassword(e.currentTarget.value)}/>
          </div>
        </form>
        <div className="adm-register-buttons">
            <button className="adm-cancel-register">Cancelar</button>
            <button type="submit" className="adm-register-button" onClick={() => registeringTeacher(addedTeacher)}>{loginLoading} Cadastrar</button>
        </div>
      </div>
    </section>
  )
}

export default RegisterTeacher;