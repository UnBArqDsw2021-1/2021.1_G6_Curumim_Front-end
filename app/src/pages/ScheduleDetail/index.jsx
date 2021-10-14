import React, { Fragment } from 'react';
import Api from "../../services/rspAPIRequests";
import './styles.css';

export default function ScheduleDetail(props) {
    let state = Api.getScheduleById;

    return (
        <Fragment>
            <div> NavBar </div>
            <div className="home-body">
                <br/>
                <h1 className="h1">{ state.nome }</h1>
                <br/>
                <p className="span">Data { state.data }</p>
                <br/>
                <p className="span">{ state.descricao }</p>
            </div>
        </Fragment>
    );
}