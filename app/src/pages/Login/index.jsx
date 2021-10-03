import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from '../../store/Context';
import Header from '../../components/Header';
import './styles.css';

function initialState() {
    return { user: '', password: '' };
}

function login({ user, password }) {
    if (user === 'admin@gmail.com' && password === 'admin') {
      return { token: '1234' };
    }
    return { error: 'Usuário ou senha inválido' };
}

const Login = () => {    
    const [values, setValues] = useState(initialState);
    const [setError] = useState(null);
    const { setToken } = useContext(StoreContext);
    const history = useHistory();

    console.log(useContext(StoreContext).token)

    if (useContext(StoreContext).token) {
        history.push('/')
    }
    console.log('ERRO')

    function onChange(event) {
        const { value, name } = event.target;
    
        setValues({
          ...values,
          [name]: value
        });
    }
    
    function onSubmit(event) {
        event.preventDefault();
    
        const { token, error } = login(values);
    
        if (token) {
          setToken(token);
          return history.push('/');
        }
    
        setError(error);
        setValues(initialState);
    }

    return (
        <section className='register-page'>
            <Header />
            <form onSubmit={onSubmit} className="login-register-form">
                <h1>Login</h1>
                <div className="div-inputs">
                    <label htmlFor="email">Email</label>
                    <input name="user" id="email" type="email" placeholder="Email" onChange={onChange} value={values.user}/>

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
