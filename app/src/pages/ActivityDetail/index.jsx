import React, { Fragment } from 'react';
import API from '../../services/pfsAPIRequest';
import RedFlag from "../../assets/images/red-flag.png";
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

function ActivityDetail(props){
    // props.match.params.value;
    let perfil = 'admin';
    let activity = API.getActivityDetail;

    return (
        <Fragment>
            <div> NavBar </div>
            <div className="activity-body">
                <div className="content-texts-header">
                    <h1>{ activity.nome }</h1>
                    <div> <img alt="" src={ RedFlag }/> <span className="text-purple">Atividade</span></div><br/>
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
