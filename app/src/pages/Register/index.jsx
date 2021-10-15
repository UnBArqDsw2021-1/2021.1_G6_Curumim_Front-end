import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../store/Context';
import '../../styles/global-styles.css';
import './styles.css';

import Header from '../../components/Header';

import auth from '../../services/authentication'

function initialState() {
    return { name: '', cpf: '', birthday: 31122021, email: '', password: '', adress: "um endereço qualquer" }
}

async function requestRegister({ name, cpf, birthday, email, password, adress }) {
    try {
        const res = await auth.register({ name, cpf, birthday, email, password, adress })

        if (res.status === 200) {
            return { response: res.data }
        }
    } catch {
        return { response: null, error: 'Erro no cadastro, tente novamente' }
    }
}

const Register = () => {   
    const [values, setValues] = useState(initialState)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const history = useHistory()

    if (useContext(StoreContext).token) {
        history.push('/')
    }

    function onChange(event) {
        const { value, name } = event.target
    
        setValues({
          ...values,
          [name]: value
        });
    }
    
    async function onSubmit(event) {
        event.preventDefault()
    
        setLoading(true)

        const { response, error } = await requestRegister(values)
        if (response) {
            setLoading(false)
    
            return history.push({
                pathname: '/login',
                state: { email: values.email }
            })
        }
    
        setLoading(false)
        setError(error)
        setValues(initialState)
    }

    let errorRegisterMessage
    let registerLoading

    if (error) {
        errorRegisterMessage = error
        setTimeout(() => {
            setError(null)
        }, 4000)
    }

    if (loading) {
        registerLoading = <div className="lds-dual-ring"></div>
    }

    return (
        <section className='register-page'>
            <Header/>
            <form onSubmit={onSubmit} className="login-register-form">
                <h1>Cadastro</h1>
                
                <div className="div-inputs">
                    <label>Nome</label>
                    <input type="text" name="name" id="name" placeholder="Nome" onChange={onChange} value={values.name} required={true}/>

                    <label>CPF</label>
                    <input type="number" name="cpf" id="cpf" placeholder="CPF" onChange={onChange} value={values.cpf} required={true}/>

                    <label>Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" onChange={onChange} value={values.email} required={true}/>

                    <label>Senha</label>
                    <input name="password" id="password" type="password" placeholder="Senha" onChange={onChange} value={values.password} required={true}/>

                    <span className='login-register-error'>{ errorRegisterMessage }</span>

                    <button className="option-button" type="submit"> {registerLoading} Cadastrar</button>
                </div>

                <div className="notRegistered">
                    <span>Já é Cadastrado? <a href="/login">Faça Login</a></span>
                </div> 
            </form>
        </section>
    )
}

export default Register;
