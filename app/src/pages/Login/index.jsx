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
        <div id="divLogin" className="formRegisterLogin">
            <Header />
            <form onSubmit={onSubmit}>
                <div>
                    <label className="defaultLabel" htmlFor="email">Email</label>
                    <input className="defaultInput" name="user" id="email" type="email" placeholder="Email" onChange={onChange} value={values.user}/>

                    <label className="defaultLabel" htmlFor="password">Senha</label>
                    <input className="defaultInput" name="password" id="password" type="password" placeholder="Senha" onChange={onChange} value={values.password}/>

                    <div className="forgotPassword">
                        Esqueceu sua senha?
                    </div>
                    <button className="defaultButton" type="submit">
                        Login
                    </button>
                </div>
                <div className="notRegistered">
                        Ainda não é cadastrado?&nbsp;
                        <a href="/cadastrar">Cadastre-se aqui</a>
                </div>
            </form>
        </div>
    )
}

export default Login;
