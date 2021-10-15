import React, { useState, useEffect } from 'react';
import './styles.css';

import Header from '../../components/Header';

import teacher from '../../services/teacherAPCRequests'

async function requestMural(token) {
    try {
        var res = await teacher.listClass(token)

        if (res.status === 200) {
            return res.data
        }
    } catch (err){
        return { response: null, error: 'Erro de listagem dos Posts' }
    }
}

const ClassList = () => {
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
			console.log(resposta)

            setPosts(resposta.list)
            setLoading(false)
			console.log(posts)
        }
        fetchData()
    }, [user, token]);

    let loginLoading

    if (loading) {
        loginLoading = <div className="dual-ring-center lds-dual-ring auxlds-dual-ring"></div>
    }

    if (posts) {
        listPosts = posts.map((post, index) => {
            return <div className='post-card'>
						<div>
							<span className='post-card-title'>{post.code}</span>
							<span className='post-card-sub-title'>{post.createdAt}</span>
						</div>
						<p className='span-post-class'>Capacidade: {post.capacity} Alunos</p>
						<hr />
					</div>
        });
    }

    return (
		<div className='home-page'>
			<Header/>

			<div className='home-body home-div'>
				<h3>Minhas Turmas</h3>
				{loginLoading}
				<div className='auxdoaux'>
					{listPosts}
				</div>
			</div>
		</div>
    )
}

export default ClassList;

/* <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
              cover={post.cover}
              // também funcionaria se colocasse apenas post={post} 
              // no lugar de passar atributo por atributo
            /> */