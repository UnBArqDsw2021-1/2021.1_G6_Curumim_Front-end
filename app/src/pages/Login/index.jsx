import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../store/Context';
import './styles.css';

import Header from '../../components/Header';

import auth from '../../services/authentication'

function initialState() {
    return { email: '', password: '' }
}

async function requestLogin({ email, password }) {
    try {
        const res = await auth.login({ email, password })

        if (res.status === 200) {
            return { response: res.data }
        }
    } catch {
        return { response: null, error: 'Login ou Senha inválido' }
    }
}

const Login = () => {   
    const [values, setValues] = useState(initialState)
    const [error, setError] = useState(null)
    const { setToken, setUser } = useContext(StoreContext)
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
    
        const { response, error } = await requestLogin(values)
        if (response) {
            if (response.token) {
                setToken(response.token)
                setUser(response.user)
      
                return history.push('/')
            }
        }
    
        setError(error)
        setValues(initialState)
    }

    return (
        <section className='register-page'>
            <Header />
            <form onSubmit={onSubmit} className="login-register-form">
                <h1>Login</h1>
                <div className="div-inputs">
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" type="email" placeholder="Email" onChange={onChange} value={values.email}/>

                    <label htmlFor="password">Senha</label>
                    <input name="password" id="password" type="password" placeholder="Senha" onChange={onChange} value={values.password}/>

                    <button className="option-button" type="submit">Entrar</button>
                </div>
                <div className="notRegistered">
                    <span>Não é Cadastrado? <a href="/cadastro">Cadastre-se</a></span>
                </div>
            </form>
        </section>
    )
}

export default Login;
