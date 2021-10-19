import React, { useState, useEffect } from 'react';
import './styles.css';

import PostCard from '../PostCard'
import guardian from '../../services/guardianAPIRequests'

async function requestMural(token) {
    try {
        var res = await guardian.board(token, 1)

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

    let listPosts

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const resposta = await requestMural(token)
            if (!(resposta.error)) {
                setPosts(resposta)   
            }
            setLoading(false)
        }
        fetchData()
    }, [user, token]);

    let loginLoading

    if (loading) {
        loginLoading = <div className="dual-ring-center lds-dual-ring auxlds-dual-ring"></div>
    }

    if (posts) {
        listPosts = posts.map((post, index) => {
            return <div key={index}>
                <PostCard
                    key={post.createdAt}
                    description={post.description}
                    fk_idChild={post.fk_idChild}
                    fk_idProfessional={post.fk_idProfessional}
                    id={post.id}
                    title={post.title}
                    updatedAt={post.updatedAt}
                />
                <hr />
            </div>
        });
    }

    return (
        <div className='home-div'>
            <h3>Mural</h3>
            {loginLoading}
            <div className='auxdoaux'>
                {listPosts}
            </div>
        </div>
    )
}

export default HomeGuardianContent;

/* <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
              cover={post.cover}
              // também funcionaria se colocasse apenas post={post} 
              // no lugar de passar atributo por atributo
            /> */