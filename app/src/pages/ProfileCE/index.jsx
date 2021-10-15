import React, { Fragment } from 'react';
import Header from '../../components/Header';
import School from "../../assets/images/school.png";
import './styles.css';
import API from '../../services/ceAPIRequests';

function ProfileCE() {
    let ce = API.getCEData;

    return (
        <Fragment>
            <Header/>
            <div className="top-box">
                <img className="Image" src={ School } alt=""/><br/>
                <p className="schoolName"> { ce.name }</p>
            </div>
            <div className="Description-body">
                <p> { ce.adress }</p><br/>
                <p> { ce.description }</p>
            </div>
        </Fragment>
            
    );
}

export default ProfileCE;