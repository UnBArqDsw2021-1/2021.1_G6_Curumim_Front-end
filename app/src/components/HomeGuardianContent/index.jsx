import React, { useState, useEffect } from 'react';

import adm from '../../services/admAPIRequests'
async function requestMural(token) {
    try {
        var res = await adm.listGuardians(token)

        if (res.status === 200) {
            return res.data
        }
    } catch (err){
        return { response: null, error: 'Erro de listagem dos Posts' }
    }
}

const HomeGuardianContent = () => {
    var userLogged = JSON.parse(localStorage.getItem('user'))
    var userToken = localStorage.getItem('token')

    const [user] = useState(userLogged)
    const [token] = useState(userToken)
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const resposta = await requestMural(token)
            setPosts(resposta.guardians)
            setLoading(false)
        }
        fetchData()
    }, [user, token, posts]);

    let loginLoading

    if (loading) {
        loginLoading = <div className="lds-dual-ring auxlds-dual-ring"></div>
    }

    return (
        <div>
            <h3>Mural</h3>
            {loginLoading}
        </div>
    )
}

export default HomeGuardianContent;