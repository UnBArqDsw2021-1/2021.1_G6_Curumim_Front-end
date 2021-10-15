import React, { useState, useEffect } from 'react';

import adm from '../../services/admAPIRequests'
async function requestMural(userType, token) {
    try {
        var res = await adm.listGuardians(token)
        console.log(token, res)

        if (res.status === 200) {
            return res.data
        }
    } catch (err){
        return { response: null, error: 'Email ou Senha inválido' }
    }
}

const HomeADMContent = () => {
    var userLogged = JSON.parse(localStorage.getItem('user'))
    var token = localStorage.getItem('token').replace(/"/g, "")
    const [user] = useState(userLogged)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        async function requestingMural() {
            const aux = await requestMural(userLogged.usertype, token);
            console.log(aux);
            setPosts(aux.guardians);
            console.log(posts);
        }
        requestingMural();
    }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3>Administrador</h3>
        </div>
    )
}

export default HomeADMContent;