import React, { useState, useEffect } from 'react';
import './styles.css';

import Header from '../../components/Header';

import adm from '../../services/admAPIRequests'

async function requestTeachers(token) {
    try {
        var res = await adm.listTeachers(token)

        if (res.status === 200) {
            return res.data
        }
    } catch (err){
        return { response: null, error: 'Erro de listagem dos Posts' }
    }
}

const ListTeachers = () => {
    var userLogged = JSON.parse(localStorage.getItem('user'))
    var userToken = localStorage.getItem('token')

    const [user] = useState(userLogged)
    const [token] = useState(userToken)
    /* const [posts, setPosts] = useState(null) */
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const resposta = await requestTeachers(token)
            console.log(resposta)
            /* setPosts(resposta.professionals) */
            setLoading(false)
        }
        fetchData()
    }, [user, token]);

    let loginLoading

    if (loading) {
        loginLoading = <div className="lds-dual-ring auxlds-dual-ring"></div>
    }

    return (
        <section className='home-page'>
            <Header/>
            <div className="home-body">
                <h3>Mural</h3>
                {loginLoading}
            </div>
        </section>
    )
}

export default ListTeachers;