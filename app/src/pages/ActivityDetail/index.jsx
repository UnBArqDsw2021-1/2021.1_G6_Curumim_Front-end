import React, { Fragment, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import API from '../../services/rspAPIRequests';
import prof from '../../services/pfsAPIRequest';
import Header from '../../components/Header';
import Brick from "../../assets/images/brick.png";
import './styles.css';
import '../../styles/global-styles.css';

function deleteActivity(props) {
    // API.deleteActivity;
    props.history.push("/");
} 

function editActivity(props) {
    props.history.push("/");
} 

function getButtons(perfil, props) {
    if(perfil === "resp"){
        return;
    }
    else {
        return <div className="content-buttons-header">
                    <button onClick={() => editActivity(props)} className="edit-button">Editar</button>
                    <button onClick={() => deleteActivity(props)} className="delete-button">Excluir</button>
                </div>;
    }
}

async function getActivityDetail(token, id) {
    try {
        console.log(token.toString())
        var res = await API.getActivity(token.replace(/"/g, ""), id)
        console.log(res.data)
        if (res.status === 200) {
            return res.data
        }
    } catch (err){
        return { response: null, error: 'Erro de listagem dos Posts' }
    }
}
    
function ActivityDetail(props){
    var userLogged = JSON.parse(localStorage.getItem('user'))
    var userToken = localStorage.getItem('token')

    const location = useLocation()

    let idLocation = ''
    if (location.state && !idLocation) {
        idLocation = location.state.id
    }
    console.log(idLocation)

    const [user] = useState(userLogged)
    const [token] = useState(userToken)
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(null)
    // props.match.params.value;
    let perfil = 'admin';
    //let activity = getActivityDetail(userToken, idLocation);
    let activity = prof.getActivityDetail;


    return (
        <Fragment>
            <Header/>
            <div className="activity-body">
                <div className="content-texts-header">
                    <h1>{ activity.nome }</h1>
                    <div> <img alt="" src={ Brick }/> <span className="text-purple">Atividade</span></div><br/>
                    <span className="text-gray">Turma: { activity.turma }</span><br/>
                    <span className="text-gray">Professor: { activity.professor }</span>
                </div>
                { getButtons(perfil, props) }
                <br/>
                <h1>Descrição</h1><br/>
                <span>Data: { activity.data }</span><br/><br/>
                <span>{ activity.descricao }</span>
            </div>
        </Fragment>
    );
}

export default ActivityDetail;
